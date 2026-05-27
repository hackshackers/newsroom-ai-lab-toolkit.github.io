# newsroom-ai-lab-toolkit
WIP toolkit based on Hacks/Hackers Newsroom AI Lab handbook

## Getting started

### 1. Open in dev container

**Codespaces:** Click **Code → Codespaces → Create codespace on main**.

**Local:** Clone the repo, open in VS Code, and accept the prompt to **Reopen in Container** (or run `Dev Containers: Reopen in Container` from the command palette).

The container will install all dependencies automatically on first build.

### 2. [optional] Authenticate Claude Code

On first use after a rebuild, Claude Code needs to be authorized:

1. Open the Claude panel in VS Code (or run `claude` in the terminal)
2. Follow the browser prompt to sign in at claude.ai
3. Once authenticated, save your credentials so they persist across future rebuilds:

```bash
cp -r ~/.claude /workspaces/newsroom-ai-lab-toolkit/.claude-credentials
```

You only need to do this once per authentication. After that, credentials are restored automatically on every rebuild.

### 3. Start the dev server

```bash
cd newsroom-ai-lab-toolkit-site
npm run start
```

> **Dev container users:** use `npm run start -- --host 0.0.0.0` instead so the server is reachable via port forwarding.

The site will be available at `localhost:3000`. In Codespaces, use the forwarded port URL from the **Ports** tab in VS Code.
