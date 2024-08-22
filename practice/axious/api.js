import axios from "axios";

export async function getAvatars(params = {}) {
    const url = new URL('https://learn.codeit.kr/api/avatars');
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  
  export async function getAvatar(id) {
    const res = await axios.get(`https://learn.codeit.kr/api/avatars/${id}`);
    return res.data;
  }
  
  export async function createAvatar(avatarData) {
    const res = await axios.post('https://learn.codeit.kr/api/avatars', {
      body: JSON.stringify(avatarData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  }
  
  export async function patchAvatar(id, avatarData) {
    const res = await axios.patch(`https://learn.codeit.kr/api/avatars/${id}`, {
      body: JSON.stringify(avatarData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  }
  
  export async function deleteAvatar(id) {
    const res = await axios.delete(`https://learn.codeit.kr/api/avatars/${id}`)
    return data.data;
  }