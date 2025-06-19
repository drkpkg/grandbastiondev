import { getExperience } from "../../data/experience.js";

export async function GET({ request }) {
  const url = new URL(request.url);
  const lang = url.searchParams.get('lang') || 'en';
  
  try {
    const experienceData = getExperience(lang);
    
    return new Response(JSON.stringify(experienceData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error('Error fetching experience data:', error);
    
    return new Response(JSON.stringify({ error: 'Failed to fetch experience data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 