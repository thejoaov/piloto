#!/usr/bin/env bash

echo "📦 Instalando dependências..."
poetry install

echo "🪝 Instalando git hooks..."
poetry run lefthook install
