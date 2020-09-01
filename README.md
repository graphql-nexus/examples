# Nexus Examples

This repo includes various examples using [Nexus](https://nexusjs.org). Each directory here contains one runnable example. The naming pattern of directories is designed to help navigate them. The gist is as follows (if you are curious about the exact rules see the [contributing guide](/CONTRIBUTING.md)):

- `plugin-*` Are for demonstrating a plugin
- `plugins-*` Are for demonstrating plugins used together
- `with-*` Are for demonstrating an integration with some other tool Notably _without_ using the plugin system.

Below you will find the examples indexed by various dimensions. So if you're curious about a topic like "authentication" or "databases" you can easily find all examples that relate to that.

If you are an expert in some tool that Nexus could integrate with but there is no example here yet for it, we would welcome a contribution for it! To get started please refer to the [contributing guide](/CONTRIBUTING.md). 🙏🏻

### Basic

- [hello-world](/hello-world)

### By Plugin

#### Prisma

- [plugin-prisma](/plugin-prisma)
- [plugins-prisma-and-jwt-auth](/plugins-prisma-and-jwt-auth)
- [plugins-prisma-and-jwt-auth-and-shield](/plugins-prisma-and-jwt-auth-and-shield)
- [with-nextjs-and-vercel-and-plugins-prisma](/with-nextjs-and-vercel-and-plugins-prisma)

#### jwt-auth

- [plugins-prisma-and-jwt-auth](/plugins-prisma-and-jwt-auth)
- [plugins-prisma-and-jwt-auth-and-shield](/plugins-prisma-and-jwt-auth-and-shield)

#### shield

- [plugins-prisma-and-jwt-auth-and-shield](/plugins-prisma-and-jwt-auth-and-shield)

### By Integration

#### Prisma

- [with-prisma](/with-prisma)
- [plugin-prisma](/plugin-prisma)

#### NextJS

- [with-nextjs](/with-nextjs)
- [with-nextjs-and-vercel-and-plugins-prisma](/with-nextjs-and-vercel-and-plugins-prisma)

#### Vercel

- [with-nextjs-and-vercel-and-plugins-prisma](/with-nextjs-and-vercel-and-plugins-prisma)

### By Domain

#### Deployment

- [with-nextjs-and-vercel-and-plugins-prisma](/with-nextjs-and-vercel-and-plugins-prisma)

#### Auth

- [plugins-prisma-and-jwt-auth-and-shield](/plugins-prisma-and-jwt-auth-and-shield)
- [plugins-prisma-and-jwt-auth](/plugins-prisma-and-jwt-auth)

#### Databases

- [with-prisma](/with-prisma)
- [plugin-prisma](/plugin-prisma)
