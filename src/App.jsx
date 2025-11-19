import { useEffect, useState } from "react";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  // Fetch all jobs
  const fetchJobs = async () => {
    setCustomSearch(false);

    const tempjobs = [];
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });

    setJobs(tempjobs);
  };

  // Fetch with filters
  const fetchJobsCustom = async (criteria) => {
    setCustomSearch(true);

    const tempjobs = [];
    const jobsRef = collection(db, "jobs");
    let filters = [];

    if (criteria.title) filters.push(where("title", "==", criteria.title));
    if (criteria.type) filters.push(where("type", "==", criteria.type));
    if (criteria.location) filters.push(where("location", "==", criteria.location));
    if (criteria.experience) filters.push(where("experience", "==", criteria.experience));

    filters.push(orderBy("postedOn", "desc"));

    const q = query(jobsRef, ...filters);
    const req = await getDocs(q);

    req.forEach((job) => {
      tempjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });

    setJobs(tempjobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} resetFilters={fetchJobs} />

      {customSearch && (
        <button
          onClick={fetchJobs}
          className="flex justify-end w-full pr-20 mb-4"
        >
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">
            Clear Filters
          </p>
        </button>
      )}

      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  );
}
export default App;
