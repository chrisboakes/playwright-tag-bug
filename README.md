# Playwright tag bug

Replication of bug where Playwright grep is failing on other spec files.

## Installation

```bash
pnpm i
```

## Running Tests

Unit:

```bash
pnpm test:unit
```

e2e:

```bash
pnpm test:e2e
```

## Problem

The Playwright tests pick up on unit test files. Maybe expected?
