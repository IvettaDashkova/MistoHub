import axios from 'axios';

function formImgURL(img) {
  const imgData = img.asset._ref.split('-');
  return `https://cdn.sanity.io/images/${
    import.meta.env.VITE_ADMIN_PROJECT_ID
  }/${import.meta.env.VITE_ADMIN_DATASET}/${imgData[1]}-${imgData[2]}.${
    imgData[3]
  }`;
}

export async function fetchGoal() {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${
        import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${
        import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_type=="goal"]{ _id, goal, raised }`
    );
    return result[0];
  } catch (error) {
    return;
  }
}
export async function fetchCompanies() {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${
        import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${
        import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_type=="companies"]{ _id, id, name, logoURL, link, question, answer } | order(id asc)`
    );

    const companies = result.map((res) => {
      if (res.logoURL) {
        res.logoURL = formImgURL(res.logoURL);
      }
      return res;
    });

    return companies;
  } catch (error) {
    return;
  }
}
export async function fetchPeople() {
  try {
    const {
      data: { result },
    } = await axios.get(
      `https://${import.meta.env.VITE_ADMIN_PROJECT_ID}.api.sanity.io/${
        import.meta.env.VITE_ADMIN_API_VERSION
      }/data/query/${
        import.meta.env.VITE_ADMIN_DATASET
      }?query=*[_type=="people"]{ _id, id,firstName,secondName,type, imageURL, facebook, instagram, otherLink, question, answer  } | order(id asc)`
    );

    const people = result.map((res) => {
      if (res.imageURL) {
        res.imageURL = formImgURL(res.imageURL);
      }
      return res;
    });
    // return people;
    return [...people, ...Array(23).fill(people[0])];
  } catch (error) {
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
