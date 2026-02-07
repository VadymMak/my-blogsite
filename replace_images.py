"""
UB Market — замена расширений картинок на .webp
Запуск: python replace-images.py (из корня проекта)
"""

import os
import re

# Корень проекта
PROJECT_ROOT = "."

# Файлы для обработки
EXTENSIONS = (".tsx", ".ts", ".scss", ".css", ".html", ".json")

# Папки для пропуска
SKIP_DIRS = {"node_modules", ".git", "build", "dist"}

# Картинки которые нужно заменить (без пути, только имя)
REPLACEMENTS = {
    # Фоны и баннеры
    "banner.jpg": "banner.webp",
    "banner_1.jpg": "banner_1.webp",
    "blog-background.jpg": "blog-background.webp",
    "industrial-background.jpg": "industrial-background.webp",
    "about-us.jpg": "about-us.webp",
    "contact-us.jpg": "contact-us.webp",
    "our-location.jpg": "our-location.webp",
    "our-products.jpg": "our-products.webp",
    "top.jpg": "top.webp",
    "sun-flower.jpg": "sun-flower.webp",
    # Продукты
    "dry-milk.jpg": "dry-milk.webp",
    "frying-oil.jpg": "frying-oil.webp",
    "mayonnaise.jpg": "mayonnaise.webp",
    "palm-oil.jpg": "palm-oil.webp",
    "powdered-milk.jpg": "powdered-milk.webp",
    "sugar.jpg": "sugar.webp",
    "vegetable-oil.jpg": "vegetable-oil.webp",
    # Логотипы
    "logo.png": "logo.webp",
    "logo-1.png": "logo-1.webp",
    "logo_1.png": "logo_1.webp",
    "logo-no-background.png": "logo-no-background.webp",
    "logo-text.png": "logo-text.webp",
    "logo-white-text.png": "logo-white-text.webp",
    "ub-market.png": "ub-market.webp",
    "logo-clear.jpg": "logo-clear.webp",
    # Иконки
    "Phone_icon.png": "Phone_icon.webp",
    "king_tests.png": "king_tests.webp",
    "viber.png": "viber.webp",
    # Иконка в /icons/
    "logo.jpeg": "logo.webp",
}


def find_files(root):
    """Найти все файлы для обработки"""
    files = []
    for dirpath, dirnames, filenames in os.walk(root):
        # Пропускаем ненужные папки
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for filename in filenames:
            if filename.endswith(EXTENSIONS):
                files.append(os.path.join(dirpath, filename))
    return files


def replace_in_file(filepath):
    """Заменить расширения в одном файле"""
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
    except (UnicodeDecodeError, FileNotFoundError):
        return 0

    original = content
    changes = 0

    for old, new in REPLACEMENTS.items():
        if old in content:
            count = content.count(old)
            content = content.replace(old, new)
            changes += count

    if changes > 0:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

    return changes


def main():
    files = find_files(PROJECT_ROOT)
    total_changes = 0
    modified_files = []

    print("=" * 50)
    print("UB Market — Замена расширений картинок на .webp")
    print("=" * 50)
    print(f"\nНайдено файлов для проверки: {len(files)}\n")

    for filepath in sorted(files):
        changes = replace_in_file(filepath)
        if changes > 0:
            total_changes += changes
            modified_files.append((filepath, changes))
            print(f"  ✅ {filepath} — {changes} замен")

    print(f"\n{'=' * 50}")
    print(f"Итого: {total_changes} замен в {len(modified_files)} файлах")
    print("=" * 50)

    if modified_files:
        print("\nИзменённые файлы:")
        for f, c in modified_files:
            print(f"  {f} ({c})")
    else:
        print("\nНичего не найдено для замены.")


if __name__ == "__main__":
    main()