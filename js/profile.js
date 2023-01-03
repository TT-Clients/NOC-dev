let members = {
  pac: {
    name: "Rev. Portia A. Cavitt",
    title: `Pastor, Clair Memorial United Methodist Church &
        President – Interdenominational Ministerial Alliance
        `,
    image: "images/staff/Pastor Portia CavittSM.jpg",
  },
  ljd: {
    name: "LaDonna Jones-Dunlap, MS",
    title: `Systems Involved Youth Specialist
    Nebraska Children and Families Foundation
        `,
    image: "images/staff/LaDonna Jones-DunlapSM.jpg",
    bio:null,
    hec: `Healing centered engagement training allow us to work together for the benefit of our youth and families
    from a place of inner peace, rather than trauma and despair.`,
    noc:`The North Omaha Collective is needed in our community because it provides an integrated balance of one body.`
  },
  re: {
    name: "Rodney Evans",
    title: `Co-Founder and Chief Executive Officer
    Metro Area Youth Services`,
    image: "images/staff/Rodney EvansSM.jpg",
  },
  lkf: {
    name: "Lt, Kenneth Fox",
    title: `Omaha Police Department
    President – Black Police Officers Association of Omaha
    `,
    image: "images/staff/Kenneth FoxSM.jpg",
    bio:null,
    hec: `There is a lot of trauma that impacts youth and families in the North Omaha community.  There many causes for the trauma to include poverty and lack of resources.  There should be an option that focuses on healing for individuals that are willing, and in need of the opportunities Healing Center Engagement provides.`,
    noc:`North Omaha Collective serves as a conduit for self-help and change. Change is best embraced when provided by trusted individuals in the community.`
 
  },
  dm: {
    name: "Doris Moore",
    title: `Founder, Chief Executive Officer\n
    Center for Holistic Development
    `,
    image: "images/staff/Doris MooreSM.jpg",
    bio:null,
    hec: `HCE training provides a framework for individuals and organizations to engage in a mindset that honors pour past, engages in our present, and lays the groundwork for our future.`,
    noc:`The North Omaha Collective allows individuals and organizations, concerned about youth and families, to practice the principles of Kwanzaa which include unity, self-determination, collective work. responsibility, cooperative economics, creativity, purpose, and faith.`
 
  },
  jeh: {
    name: "Rev. James E. Hunter, Th.D",
    title: `Community Initiatives Director\n
    YouTurn
    `,
    image: "images/staff/Pastor James E HunterSM.jpg",
    bio:null,
    hec: `Our community has been the recipient of Social Toxicity. Social toxins, such as racism, poverty, sexism and transphobia, has threaten the overall wellbeing of individuals in our community for decades. Social Toxicity, which can be linked to depression, anxiety, stress and violence, has caused physical and mental harm.  Healing Centered Engagement (HCE) training will address this issue and become the catalyst to bring forth much needed healing in our community.   `,
    noc:`The need for North Omaha Collective (NOC) as a service provider in our community is captured in our mission statement. North Omaha Collective builds the capacity of African American youth serving organizations to claim their voice, improve their overall impact, cultivate healing, and take courageous action to improve the well-being of children and families in the North Omaha community. `
  },
  tn: {
    name: "Teresa Negron",
    title: `Executive Director\n
    YouTurn    
    `,
    image: "images/staff/Teresa NegronSM.jpg",
    bio:null,
    hec: `Community trauma/hurt is alive and well in our community, it presents in the forms of disenfranchisement, the inability/or unwillingness to coming together to effect positive change, organizations in competition for financial support and strained relationships.  Healing Centered Engagement teaches us to honor our culture, create a space where the community can move from problem to possibility, rebuild and expand our relationships, find our purpose, and help to understand the past, and explore the possibilities for our future.`,
    noc:`The North Omaha Collective is a comprised of a group of leaders who have experienced what Healing Centered Engagement training can do when put into action.  As our community explores HCE with North Omaha Collective, we will become a healthy and vibrant community.`

  },
  pt: {
    name: "Patrick Taylor",
    title: `Co-Founder and Director of Youth Development\n
    Metro Area Youth Services
       
    `,
    image: "images/staff/Patrick TaylorSM.jpg",
  },
  rw: {
    name: "Richard Webb",
    title: `President and Chief Executive Officer\n
    Boys and Girls Clubs of the Midlands`,
    image: "images/staff/Richard WebbSM.jpg",
    bio:null,
    hec: `I believe that Healing Centered Engagement training provides tools for community organizations and community individuals to have in their tool box as they navigate daily living and interactions with each other in positive ways and identifying different approaches.`,
    noc:`I believe North Omaha Collective is needed in our community in order to continue the fostering of positive relationships and having an organization that is dedicated to lifting up and empowering North Omaha organizations that are leading the way in youth and family development.`
 
  },
  ctw: {
    name: "Carolyn T Williamson",
    title: `Retired, Director of Health Access\n
    Girls Inc.
    `,
    image: "images/staff/Carolyn T WilliamsonSM.jpg",
  },
};

window.addEventListener("DOMContentLoaded", main);
function main() {
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  let member = urlParams.get("member");
  if(members[member]){
  document.querySelector("h2.team_title").innerHTML=members[member].name;
  document.querySelector("h6.team_position").innerHTML=members[member].title;
  //document.querySelector("div.bio").innerHTML=members[member].bio? members[member].bio:"Coming soon";
  document.querySelector("div.hec").innerHTML=members[member].hec?members[member].hec:"Coming soon";
  document.querySelector("div.noc").innerHTML=members[member].noc? members[member].noc:"Coming soon";
  document.querySelector("img.prof-image").src=members[member].image;
  }
}
