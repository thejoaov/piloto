#!/usr/bin/env bash
echo "📦 Instalando dependências..."
python3 -m pip install -r requirements.txt

echo "🔄 Migrando banco de dados..."
python3 manage.py makemigrations --noinput
python3 manage.py migrate --noinput

echo "📦 Coletando arquivos estáticos..."
python3 manage.py collectstatic --noinput

# echo "🔄 Instalando dependências do frontend..."
# cd frontend && pnpm install

# echo "🔄 Construindo frontend..."
# cd frontend && pnpm build

# echo "🔄 Copiando arquivos estáticos do frontend para o diretório raiz..."
# cp -r frontend/.next/* ./.next

echo "🎉 Build finalizado com sucesso!"