import { useAuthDispatch } from "../../../../context/auth";
import { useToggleDispatch } from "../../../../context/toggle";
import { useFetch } from "../../../../hooks/useFetch";
import Router from "next/router";

export const getOptionContents = () => {
  const authDispatch = useAuthDispatch();
  const toggleDispatch = useToggleDispatch();

  const options = {
    messages: {
      name: "Messages",
      handleClick: () => {
        alert("messages button clicked");
      },
    },
    notifications: {
      name: "Notifications",
      handleClick: () => {
        alert("notifications button clicked");
      },
    },
    trips: {
      name: "Trips",
      handleClick: () => {
        alert("trips button clicked");
      },
    },
    saved: {
      name: "Saved",
      handleClick: () => {
        alert("saved button clicked");
      },
    },
    refer: {
      name: "Refer a host",
      handleClick: () => {
        alert("refer button clicked");
      },
    },
    account: {
      name: "Account",
      handleClick: () => {
        alert("account button clicked");
      },
    },
    signup: {
      name: "Sign up",
      handleClick: () => {
        authDispatch({ type: "auth_signup" });
        toggleDispatch({ type: "toggle_auth" });
      },
    },
    login: {
      name: "Log in",
      handleClick: () => {
        authDispatch({ type: "auth_login" });
        toggleDispatch({ type: "toggle_auth" });
      },
    },
    home: {
      name: "Host your home",
      handleClick: () => {
        Router.push("/host/homes");
      },
    },
    experience: {
      name: "Host an experience",
      handleClick: () => {
        Router.push("/host/experiences");
      },
    },
    help: {
      name: "Help",
      handleClick: () => {
        alert("help button clicked");
      },
    },
    logout: {
      name: "Logout",
      handleClick: async () => {
        const doFetch = useFetch({
          url: "/api/users/signout",
          method: "post",
          body: {},
          onSuccess: () => Router.reload(),
        });
        await doFetch();
      },
    },
  };

  return options;
};
