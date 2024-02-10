
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = (id) => {
    const storedApplication = getStoredJobApplication();
    const exist = storedApplication.find(jobId => jobId === id);
    if (!exist) {
        storedApplication.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedApplication))
    }
}

export { getStoredJobApplication, saveJobApplication }


