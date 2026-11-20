# Starter leaderboard portraits

- 10 Arabic names in Latin letters, seven locally served portrait images and three anonymous default avatars.
- Real registered positive-XP learners replace starter rows one by one. No guest names or photos are inserted into user records.
- API marks starter rows explicitly. The UI explains that starter profiles are examples.
- Remote portrait sources are used only at asset preparation, never requested by visitors.
- Source: https://randomuser.me/copyright (authorized UI Faces portraits).
- Portrait sources: https://randomuser.me/api/portraits/med/men/84.jpg, https://randomuser.me/api/portraits/med/men/86.jpg, https://randomuser.me/api/portraits/med/men/44.jpg, https://randomuser.me/api/portraits/med/women/12.jpg, https://randomuser.me/api/portraits/med/women/57.jpg, https://randomuser.me/api/portraits/med/women/43.jpg, https://randomuser.me/api/portraits/med/women/74.jpg.
- Checks: typecheck, production build, leaderboard API fixtures (19 assertions), Arabic/English mobile390 rendering and image-load checks.
