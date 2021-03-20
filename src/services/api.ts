const ACCESS_TOKEN_MAP_BOX =
  'access_token=pk.eyJ1IjoiZWx0b25sYXp6YXJpbiIsImEiOiJja2c3YTVlYzkwNWdiMnJvMmo3Y2lodWx4In0.AnK-zQXNEjwNaTmq1mbI_g';

export const fetchLocalMapBox = (local: string) =>
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
  )
    .then((response) => response.json())
    .then((data) => data);

export const fetchUserGithub = (login: string) =>
  fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then((data) => data);
