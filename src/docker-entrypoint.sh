#!/usr/bin/env sh
set -e

# Vygeneruj runtime konfiguráciu z template podľa env premenných
TEMPLATE="/usr/share/nginx/html/assets/config.js.template"
TARGET="/usr/share/nginx/html/assets/config.js"

if [ -f "$TEMPLATE" ]; then
  # shellcheck disable=SC2016
  echo "[entrypoint] Generujem assets/config.js (CONTACT_API_URL=${CONTACT_API_URL:-unset})"
  # Použijeme envsubst na nahradenie len známej premennej
  CONTACT_API_URL="${CONTACT_API_URL:-https://sw.tronic.sk/api/contact}" \
  sh -c 'envsubst < "$TEMPLATE" > "$TARGET"' 2>/dev/null || (
    # fallback ak by envsubst nebolo dostupné (busybox sh)
    sed "s#\${CONTACT_API_URL:-https://sw.tronic.sk/api/contact}#${CONTACT_API_URL}#g" "$TEMPLATE" > "$TARGET"
  )
fi

exec nginx -g 'daemon off;'

