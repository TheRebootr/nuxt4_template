# Nuxt 4 Project Template

![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxt&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node JS](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=yellow)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

Modern SaaS application frontend built with Nuxt 4, providing a beautiful and performant user experience..

## Developer Setup

The instructions below are tested on any bash/zsh shell (Linux / MacOS / WSL).

### Prerequisites

- **Node.js 20+** - JavaScript runtime ([Install Node.js](https://nodejs.org/))
- **pnpm** - Fast, disk space efficient package manager ([Install pnpm](https://pnpm.io/installation))
- **just** - Command runner ([Install Just](https://github.com/casey/just))

### Project

1. **Clone the repository:**

   ```bash
   gh repo clone github/{repo}
   cd {proj_repo}
   ```

2. **Run a one-time setup script:**

   ```bash
   just setup
   ```

3. **Start the development server:**

   ```bash
   just dev
   ```

### AI Development Tools

This project is configured with **MCP (Model Context Protocol)** servers for enhanced AI-assisted development workflows in both:

- **Claude Code** - CLI-based AI coding assistant (native VSCode Extension now available)
- **GitHub Copilot** - VSCode integration via MCP extensions

#### MCP

- Nuxt UI

#### Agents

- git-commit-writer(Claude Code)

### VS Code

This repository includes VS Code configuration for optimal development experience.

#### Recommended Extensions

- **Vue - Official** (`Vue.volar`) - Vue language support
- **ESLint** (`dbaeumer.vscode-eslint`) - JavaScript/TypeScript linter
- **Prettier** (`esbenp.prettier-vscode`) - Code formatter
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) - Tailwind CSS support
- **DotENV** (`mikestead.dotenv`) - env files support
- **GitHub Pull Requests** (`GitHub.vscode-pull-request-github`) - Pull Request for GitHub
- **Nuxtr** (`nuxtr.nuxtr`) - Nuxt community plugin
- **Javascript and TypeScript Nightly** (`ms-vscode.vscode-typescript-next`) - Typescript and JS Support by Microsoft

#### VS Code Features

The workspace configuration (.vscode/settings.json) activates the following:

- ☑️ **Type hints** & **IntelliSense**
- ☑️ **Auto-formatting**
- ☑️ **Auto-import sorting**
- ☑️ **Vue SFC support**
- ☑️ **Debug configurations**
- ☑️ **Inline error highlighting**
- ☑️ **Tailwind CSS IntelliSense**
- ☑️ **AI prompt for Commit Message & GitHub PR Requests**
- ☑️ **MCP Server** - Model Context Protocol integration for AI workflows

## Project Structure

```
proj-name/
├── app/                       # Application source
│   ├── app.vue               # Root Vue component
│   ├── app.config.ts         # App-level configuration
│   ├── assets/               # Static assets
│   │   └── css/              # Global styles
│   │       └── main.css      # Main stylesheet
│   ├── components/           # Vue components
│   ├── composables/          # Vue composables
│   ├── layouts/              # Page layouts
│   ├── middleware/           # Route middleware
│   ├── pages/                # File-based routing
│   │   └── index.vue         # Home page
│   ├── plugins/              # Nuxt plugins
│   ├── stores/               # Pinia stores
│   ├── types/                # TypeScript types
│   └── utils/                # Utility functions
├── public/                   # Public static files
│   └── favicon.ico          # Site favicon
├── .env.example             # Example environment variables
├── eslint.config.mjs        # ESLint configuration
├── justfile                 # Task runner commands
├── nuxt.config.ts           # Nuxt configuration
├── package.json             # Dependencies & scripts
├── pnpm-lock.yaml          # Lock file
├── pnpm-workspace.yaml     # Workspace configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Project Status

### Frontend Features

| Component              | Status  | Notes              |
| ---------------------- | ------- | ------------------ |
| Project structure      | ✅ Done | Nuxt 4 foundation  |
| UI Framework (Nuxt UI) | ✅ Done | Component library  |
| TypeScript             | ✅ Done | Type safety        |
| ESLint                 | ✅ Done | Code quality       |
| File-based routing     | ✅ Done | Nuxt pages         |
| Development tooling    | ✅ Done | just, pnpm         |
| Authentication UI      | 🔜 TODO | Login/signup pages |
| Role Management        | 🔜 TODO | Authorization      |
| Logging                | 🔜 TODO | Observability      |
| Exception Handling     | 🔜 TODO | Error Management   |
| State management       | 🔜 TODO | Pinia stores       |

### Production Readiness

- 🔜 CI/CD Pipeline
- 🔜 Hosting
- 🔜 Auth Provider/ Service
- 🔜 SEO optimization
- 🔜 Telemetry (App Metric, Logs Aggregation)

---

<div align="center">

### Built by **_TheRebootr_**

**[Documentation](docs/)** • **[Issues](https://github.com/)** • **[Contributing](CONTRIBUTING.md)**

</div>
