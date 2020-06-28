export async function postEndPoint(postData: object) {
  const requestOptions: object = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...postData }),
  };
  const response = await fetch(
    "https://gully-cricket-2f2fe.firebaseio.com/match.json",
    requestOptions
  );
  const data = await response.json();
  return data;
}

export async function getEndPoint() {
  const requestOptions: object = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(
    "https://gully-cricket-2f2fe.firebaseio.com/match.json",
    requestOptions
  );
  const data = await response.json();
  return data;
}

export async function putEndPoint(postData: object) {
  const requestOptions: object = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...postData }),
  };
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://gully-cricket-2f2fe.firebaseio.com/match.json",
    requestOptions
  );
  const data = await response.json();
  return data;
}
