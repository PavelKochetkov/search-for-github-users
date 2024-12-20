# GitHub User Search

Простое приложение для поиска пользователей GitHub. Найдите разработчиков по имени или нику и узнайте о них больше!

## Основные функции

🔍 **Поиск по имени или нику:** Легко находите интересных разработчиков.

👤 **Просмотр информации:** Узнайте больше о каждом пользователе и их проектах.

⚙️ **Фильтрация:** Отфильтруйте пользователей по количеству репозиториев. **В разработке**.

## Установка

Чтобы запустить проект локально, выполните следующие шаги:

1. Склонировать репозиторий:

```
git clone https://github.com/PavelKochetkov/search-for-github-users.git
```
2. Установить зависимости:

```
make install
```
3. Запуск приложения:

```
make start
```
## Как использовать

1. Введите имя или ник пользователя GitHub в поле поиска.
2. Нажмите на кнопку для поиска.
3. Просматривайте результаты и получайте дополнительную информацию о каждом пользователе, нажав на их профиль.

## Технологии

- TypeScript
- React
- Tailwind CSS
- GitHub API
- Vite

## Future

1. Доработка фильтрации по количеству репозиториев.
2. Реализация пагинации для просмотра всех найденных пользователей (сейчас в тестовом режиме приложение показывает первые 16 совпадений).
3. Отображение статуса загрузки.
4. Обработка ошибок.

Демо приложения доступно по адресу: [Demo](https://search-for-github-users-tan.vercel.app/)