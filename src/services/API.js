import axios from 'axios';

export async function fetchGoal() {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_type=="goal"]{ _id, goal, raised }`
    );
    console.log('goal', result[0]);
    return result[0];
  } catch (error) {
    //    handle error by some notification
    return;
  }
}
export async function fetchCompanies() {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_type=="companies"]{ _id, id, name, logoURL, link, question, answer } | order(id asc)`
    );
    console.log('companies', result);
    return result;
  } catch (error) {
    //    handle error by some notification
    return;
  }
}
export async function fetchPeople() {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_type=="people"]{ _id, id,firstName,secondName,type, imageURL, facebook, instagram, otherLink, question, answer  } | order(id asc)`
    );
    console.log('people', result);
    return result;
  } catch (error) {
    //    handle error by some notification
    return;
  }
}

export async function postData(userData) {
  const { data } = await axios.post(
    `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_TOKEN}/sendMessage`,
    {
      chat_id: import.meta.env.VITE_CHAT_ID,
      parse_mode: 'html',
      text: userData,
    }
  );

  return data;
}
