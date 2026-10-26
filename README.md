# Gry Dynaków

Strona z listą gier tworzonych przez Cezarego i Andrzeja Dynaków: https://games.dynak.net

Statyczna strona (HTML, CSS, odrobina JS), bez budowania, hostowana na GitHub Pages.

## Jak dodać grę
Dopisz wpis do `games.json` (pola: `id`, `title`, `description`, `status`, `statusKind` = `ready` lub `wip`, `tech`, `links`). Lista na stronie odświeża się sama.

Gry z prywatnych repozytoriów: bez pola `links` (bez linku do kodu).

## Lokalnie
`python3 -m http.server` i otwórz http://localhost:8000
