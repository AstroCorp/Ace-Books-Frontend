#!/bin/sh

socat TCP-LISTEN:3001,fork TCP:backend:3001 &

pnpm install

pnpm run dev
