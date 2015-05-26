# Skivvy package: `utils`
[![npm version](https://img.shields.io/npm/v/@skivvy/skivvy-package-utils.svg)](https://www.npmjs.com/package/@skivvy/skivvy-package-utils)
![Stability](https://img.shields.io/badge/stability-stable-brightgreen.svg)

> Create Skivvy tasks and packages


## Installation

```bash
skivvy install utils
```


## Overview

This package is intended to help create tasks and packages for the [Skivvy](https://www.npmjs.com/package/skivvy) task runner.


## Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `paths.tasks` | `string` | No | `"skivvy_tasks"` | Local tasks folder |
| `paths.packages` | `string` | No | `"node_modules"` | External packages folder |
| `overwrite` | `boolean` | No | `false` | Whether to overwrite existing files |


## Included tasks

### `create-task`

Create a Skivvy task

#### Usage:

```bash
skivvy run create-task
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `context.name` | `string` | No | User-prompted | Task name |
| `context.description` | `string` | No | User-prompted | Task description |
| `options.destination` | `string` | No | `package.paths.tasks` | Local tasks folder |
| `options.overwrite` | `boolean` | No | `package.overwrite` | Whether to overwrite existing files |


### `create-package`

Create a Skivvy package

#### Usage:

```bash
skivvy run create-package
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `context.name` | `string` | No | User-prompted | Skivvy package name |
| `context.description` | `string` | No | User-prompted | Task description |
| `context.author` | `string` | No | `project.author` | Author name |
| `context.license` | `string` | No | `project.license` | Package license |
| `options.destination` | `string` | No | `package.paths.packages` | External packages folder |
| `options.overwrite` | `boolean` | No | `package.overwrite` | Whether to overwrite existing files |
