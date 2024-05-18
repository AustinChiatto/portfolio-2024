import { fetchCommits } from '@/lib/GitHubFetch';
import HomeContent from '@/components/HomeContent/HomeContent';

const Home = async () => {
  const recentCommits = await fetchCommits();

  return (
    <>
      <HomeContent commitData={recentCommits} />
    </>
  );
};

export default Home;
