# Contributing to NordVPN Official Authorized Station (nordvpn.help)

This repository houses the frontend source for **nordvpn.help**.

## Local Development Workflow

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the local development server:
   ```bash
   pnpm dev --host
   ```

3. Code quality and type check:
   ```bash
   pnpm check
   ```

4. Build production static bundle:
   ```bash
   pnpm build
   ```

## Guidelines

- All external links to the registration gateway must use the central `siteConfig.registerUrl` constant with `rel="nofollow noopener noreferrer"`.
- Maintain clean zero-log and transparent pricing claims across all copies.
