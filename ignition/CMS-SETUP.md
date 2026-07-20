# Sveltia CMS — setup

The content editor lives at **`https://<your-domain>/admin`**. It reads
`public/admin/config.yml` and commits Markdown straight to the `main` branch via
GitHub — which triggers a Cloudflare Pages deploy. No database, no backend to run.

The only one-time setup is **GitHub login**, which needs a tiny OAuth worker on
Cloudflare. ~15 minutes, done once.

---

## 1. Create a GitHub OAuth App

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
   (https://github.com/settings/developers)
2. Fill in:
   - **Application name**: `MDPVA CMS`
   - **Homepage URL**: `https://<your-domain>`
   - **Authorization callback URL**: `https://mdpva-cms-auth.<your-subdomain>.workers.dev/callback`
     (you'll get the real worker URL in step 2 — you can come back and edit this)
3. Click **Register application**
4. Copy the **Client ID**, then **Generate a new client secret** and copy it too.

---

## 2. Deploy the OAuth worker

This is the official `sveltia-cms-auth` worker — it does the GitHub login
handshake and nothing else.

**Option A — from your machine (recommended):**

```sh
git clone https://github.com/sveltia/sveltia-cms-auth.git
cd sveltia-cms-auth
npm install
npx wrangler deploy
```

After it deploys, note the worker URL, e.g.
`https://sveltia-cms-auth.<your-subdomain>.workers.dev`.

Then set the secrets (paste each value when prompted):

```sh
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler secret put ALLOWED_DOMAINS   # enter: <your-domain>
```

**Option B — Cloudflare dashboard:** Workers & Pages → Create → import the
`sveltia/sveltia-cms-auth` repo, deploy, then add the same three variables under
the worker's **Settings → Variables and Secrets**.

---

## 3. Wire it up

1. In the **GitHub OAuth App**, set the **Authorization callback URL** to:
   `https://<your-worker-url>/callback`
2. In **`public/admin/config.yml`**, replace the placeholders:
   ```yaml
   backend:
     repo: <github-owner>/mdpva-site
     base_url: https://<your-worker-url>
   ```
3. Commit + push that change (deploys via Cloudflare Pages).

---

## 4. Log in and publish

1. Visit `https://<your-domain>/admin`
2. Click **Sign in with GitHub** → authorize
3. Create/edit an entry under any collection (Sponsors, Events, Gallery, Pages),
   fill the fields, **Save**.
   - Saving commits straight to `main` (`publish_mode: simple`, no editorial
     workflow/drafts) → Cloudflare rebuilds → live in ~1–2 min.

---

## Notes

- **Who can log in**: anyone with push access to the `<github-owner>/mdpva-site`
  repo. Add collaborators in GitHub to give editors CMS access — there is no
  separate MDPVA-specific permission system.
- **Images**: uploads land in `public/uploads/` and are referenced as
  `/uploads/<file>`. Keep them reasonably sized (the build does not resize them).
- **Local editing** (optional): run the CMS against local files with
  `npx @sveltia/cms-server` and add `local_backend: true` to `config.yml` —
  handy for drafting offline. Not required.
