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
    const isDuplicate = installationList.some((i) => i.id == app.id);
    if (isDuplicate) return alert("Items already added in installation list");
    const updateInstalList = [...installationList, app];
    alert(`${app.title} installing....`);
    localStorage.setItem("installed", JSON.stringify(updateInstalList));
  } catch (err) {
    console.log(err);
  }
};
