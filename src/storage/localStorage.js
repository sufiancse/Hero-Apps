import { toast } from "react-toastify";

export const loadInstallationList = () => {
  try {
    const data = localStorage.getItem("installed");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updateList = (app) => {
  const installationList = loadInstallationList();
  try {
    const updateInstalList = [...installationList, app];
    toast(`${app.title} Apps Installing....`,{
        position:"top-center",
        type:"info"
    });
    localStorage.setItem("installed", JSON.stringify(updateInstalList));
  } catch (err) {
    console.log(err);
  }
};

export const removeList = (id) => {
  const installationList = loadInstallationList()
  try{
    const updateInstalledList = installationList.filter(app => app.id !== id)
    localStorage.setItem("installed", JSON.stringify(updateInstalledList));
  }
  catch(err){
    console.log(err)
  }
}