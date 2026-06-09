# @n8n-dev/n8n-nodes-amazonaws-codebuild

![amazonaws-codebuild Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-amazonaws-codebuild.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-amazonaws-codebuild)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing amazonaws-codebuild API integrations by hand.**

Every time you connect n8n to amazonaws-codebuild, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to amazonaws-codebuild took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-amazonaws-codebuild
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-amazonaws-codebuild`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **amazonaws-codebuild API** → paste your API key
3. Drag the **amazonaws-codebuild** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Default</b> (45 operations)</summary>

- Post Batch Delete Builds
- Post Batch Get Build Batches
- Post Batch Get Builds
- Post Batch Get Projects
- Post Batch Get Report Groups
- Post Batch Get Reports
- Post Create Project
- Post Create Report Group
- Post Create WEBHOOK
- Post Delete Build Batch
- Post Delete Project
- Post Delete Report
- Post Delete Report Group
- Post Delete Resource Policy
- Post Delete Source Credentials
- Post Delete WEBHOOK
- Post Describe Code Coverages
- Post Describe Test Cases
- Post Get Report Group Trend
- Post Get Resource Policy
- Post Import Source Credentials
- Post Invalidate Project Cache
- Post List Build Batches
- Post List Build Batches For Project
- Post List Builds
- Post List Builds For Project
- Post List Curated Environment Images
- Post List Projects
- Post List Report Groups
- Post List Reports
- Post List Reports For Report Group
- Post List Shared Projects
- Post List Shared Report Groups
- Post List Source Credentials
- Post Put Resource Policy
- Post Retry Build
- Post Retry Build Batch
- Post Start Build
- Post Start Build Batch
- Post Stop Build
- Post Stop Build Batch
- Post Update Project
- Post Update Project Visibility
- Post Update Report Group
- Post Update WEBHOOK

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from amazonaws-codebuild docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official amazonaws-codebuild OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **amazonaws-codebuild** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the amazonaws-codebuild API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
