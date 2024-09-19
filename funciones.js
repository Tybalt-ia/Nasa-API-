export async function consultaUrl(url) {
    return await fetch(url).then((res) => res.json());
  }