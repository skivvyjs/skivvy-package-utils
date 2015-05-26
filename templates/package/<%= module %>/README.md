# Skivvy package: `<%= name %>`
[![npm version](https://img.shields.io/npm/v/<%= module %>.svg)](https://www.npmjs.com/package/<%= module %>)
![Stability](https://img.shields.io/badge/stability-unstable-yellow.svg)

> <%= description %>


## Installation

```bash
skivvy install <%= name %>
```


## Overview

This package allows you to <%= description.charAt(0).toLowerCase() + description.slice(1) %> from within the [Skivvy](https://www.npmjs.com/package/skivvy) task runner.


## Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `user` | `string` | No | `"world"` | Username for example task |


## Included tasks

### `hello-world`

Example task

#### Usage:

```bash
skivvy run hello-world
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `user` | `string` | No | `package.user` | User to greet |
