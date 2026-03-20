# ICAS Documents

1. `nix develop`
2. `pnpm i`
3. `pnpm dev`

**Deploy**

1. `pnpm build`
2. `scp -r .vitepress/dist/. root@$(pass show vps-bacon-ip):/var/www/icas.1l.is`
