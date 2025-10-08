
# Default recipe to display available commands
default:
    @just --list

# Install dependencies using pnpm
install:
   pnpm install

# Run the development server
dev:
  pnpm dev

# Run linting with eslint
lint:
  pnpm lint

typecheck:
  pnpm typecheck

env:
    cp .env.example .env

# Run all quality checks (lint + typecheck)
check: lint typecheck

# Bootstrap for development
setup: install env
    @echo "---------------------------------------------"
    @echo "--------- 🚀 Setup completed ----------------"
    @echo "--- Note: Change the .env file as needed. ---"
    @echo "---------------------------------------------"

