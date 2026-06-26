import { Router } from 'express';
import { pool } from '../db/pool';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.use(requireAuth);

router.get('/', async (req, res, next) => {
  try {
    const result = await pool.query(
      `SELECT id, title, canvas_json, created_at, updated_at
       FROM projects
       WHERE user_id = $1
       ORDER BY updated_at DESC`,
      [req.user?.userId],
    );

    return res.json({ projects: result.rows });
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { title, canvas_json: canvasJson } = req.body as {
      title?: string;
      canvas_json?: unknown;
    };

    const projectTitle = title?.trim() || 'Untitled Project';
    const projectCanvas = canvasJson ?? {};

    const result = await pool.query(
      `INSERT INTO projects (user_id, title, canvas_json)
       VALUES ($1, $2, $3)
       RETURNING id, title, canvas_json, created_at, updated_at`,
      [req.user?.userId, projectTitle, projectCanvas],
    );

    return res.status(201).json({ project: result.rows[0] });
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const result = await pool.query(
      `SELECT id, title, canvas_json, created_at, updated_at
       FROM projects
       WHERE id = $1 AND user_id = $2`,
      [req.params.id, req.user?.userId],
    );

    const project = result.rows[0];

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.json({ project });
  } catch (error) {
    return next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { title, canvas_json: canvasJson } = req.body as {
      title?: string;
      canvas_json?: unknown;
    };

    const result = await pool.query(
      `UPDATE projects
       SET
         title = COALESCE($1, title),
         canvas_json = COALESCE($2::jsonb, canvas_json),
         updated_at = NOW()
       WHERE id = $3 AND user_id = $4
       RETURNING id, title, canvas_json, created_at, updated_at`,
      [title?.trim() || null, canvasJson ?? null, req.params.id, req.user?.userId],
    );

    const project = result.rows[0];

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.json({ project });
  } catch (error) {
    return next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await pool.query('DELETE FROM projects WHERE id = $1 AND user_id = $2 RETURNING id', [
      req.params.id,
      req.user?.userId,
    ]);

    if (!result.rowCount) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

export default router;
