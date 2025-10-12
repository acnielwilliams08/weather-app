export const fetchApi = async (region: string) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=5e02d2dd91b14bd28f4235037250710&q=${region}&aqi=no`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Error al cargar la data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return "";
  }
};
