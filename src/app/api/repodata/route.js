import { getRepoData } from '@/utils/get_repo_data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const username = searchParams.get('username');
  const reponame = searchParams.get('reponame');

  if (!username || !reponame) {
    return Response.json({ error: 'Missing username or reponame query parameter' });
  }
  
  const data = await getRepoData(`https://github.com/${username}/${reponame}`);
  return Response.json(data);
}
