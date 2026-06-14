import { sanityClient } from "@/sanity/lib/client";

export async function getFeaturedProjects() {
  return sanityClient.fetch(`*[_type == "project" && featured == true]`);
}

export async function getProjectsByType(type: "selling" | "investment" | "management") {
  return sanityClient.fetch(`*[_type == "project" && type == $type]`, { type });
}

export async function getTeam() {
  return sanityClient.fetch(`*[_type == "employee"] | order(order asc)`);
}

export async function getTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"] | order(order asc)`);
}

export async function getBranches() {
  return sanityClient.fetch(`*[_type == "branch"] | order(order asc)`);
}

export async function getAchievements() {
  return sanityClient.fetch(`*[_type == "achievement"] | order(order asc)`);
}
