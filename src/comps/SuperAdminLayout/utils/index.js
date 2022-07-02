import axios from "axios";

export const theme = {
  color: {
    ssorange: "#F2994B",
    ssorangehover: "#e79044",
    ssfadedgray: "#e2e2e2",
    blue: "#007bff",
    indigo: "#6610f2",
    purple: "#6f42c1",
    pink: "#e83e8c",
    red: "#dc3545",
    orange: "#fd7e14",
    yellow: "#ffc107",
    green: "#28a745",
    teal: "#20c997",
    cyan: "#17a2b8",
    white: "#fff",
    gray: "#6c757d",
    graydark: "#343a40",
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    info: "#17a2b8",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
    dark: "#343a40",
  },
  breakpoint: {
    xs: 0,
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  font: {
    sans: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    monospace:
      'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
};
export const createAccountFunc = async (data) => {
  const newData = { ...data, role: "admin" };
  const res = await registerUser(newData)
  console.log(res)
  
  if(res.status >=200 && res.status <= 299){
    return alert('Account has been created successfully !')
  }
  if(res.status >=400 && res.status <= 500){
    if(res.status === 422){
      return alert(`Error: ${res?.data?.error}`)
    }
    return alert('Error Something went wrong Try again later!')
  }
};

// "https://sandbox-api.kodobe.net/users/v1/users"
export const registerUser = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/v1/users`,
      data,
      {
        headers: {
          "client-id": process.env.REACT_APP_CLIENT_ID,
          "client-secret": process.env.REACT_APP_STAGING_SECRET,
        }
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
export const handleRequestError = (error) => {
  if (error.toString() === "Error: Network Error") {
    return "Please check your network connection and try again";
  } else {
    return error?.response;
  }
};
export const handleRequestResponse = (response, enqueueSnackbar, success="Your Login is Successful!", error) => {
  if (response?.status >= 200 && response?.status <= 299) {
    enqueueSnackbar(`Success ${success || response?.data}`, {
      variant: "success",
    });
    return true
  } else {
    enqueueSnackbar(`Error: ${response?.data?.error}`, {
      variant: "error",
    });
    return false
  }
};
export const registerUserTwo = async (data) => {
  try {
    await fetch("https://sandbox-api.kodobe.net/users/v1/users", {
      method: "POST",
      headers: {
        "client-id": "staging_dula",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        console.log(data.json());
        return data.json();
      })
      .catch((err) => {
        console.log(err);
        return data.json();
      })
      .finally((args) => {
        console.log(args);
        return data.json();
      });
  } catch (error) {
    console.log(error.response);
  }
};
