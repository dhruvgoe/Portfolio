import React from "react";

import ec2Logo from "../assets/skill assets/ec2.jpeg";
import s3Logo from "../assets/skill assets/s3.jpeg";
import rdsLogo from "../assets/skill assets/rds.png";
import lambdaLogo from "../assets/skill assets/lambda.png";
import cloudwatchLogo from "../assets/skill assets/cloudwatch.png";
import route53Logo from "../assets/skill assets/route53.png";
import cloudfrontLogo from "../assets/skill assets/cloudfront.png";
import snsLogo from "../assets/skill assets/sns.png";

import gitLogo from "../assets/skill assets/Git.svg";
import githubLogo from "../assets/skill assets/GitHub.png";
import githubActionsLogo from "../assets/skill assets/githubactions.png";
import dockerLogo from "../assets/skill assets/docker.png";
import kubernetesLogo from "../assets/skill assets/kubernetes.png";
import terraformLogo from "../assets/skill assets/terraform.png";

import grafanaLogo from "../assets/skill assets/grafana.png";
import prometheusLogo from "../assets/skill assets/prometheus.png";

import linuxlogo from "../assets/skill assets/linux.jpeg";
import windowslogo from "../assets/skill assets/windows.jpeg";

import m from "../assets/skillsBgM.png";

const Skills = () => {
  const AwsSkillsSet = [
    { name: "EC2", logo: ec2Logo },
    { name: "S3", logo: s3Logo },
    { name: "RDS", logo: rdsLogo },
    { name: "Lambda", logo: lambdaLogo },
    { name: "CloudWatch", logo: cloudwatchLogo },
    { name: "Route 53", logo: route53Logo },
    { name: "CloudFront", logo: cloudfrontLogo },
    { name: "SNS", logo: snsLogo },
  ];

  const DevOpsSkillsSet = [
    { name: "Git", logo: gitLogo },
    { name: "Github", logo: githubLogo },
    { name: "Github Actions", logo: githubActionsLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "Kubernetes", logo: kubernetesLogo },
    { name: "Terraform", logo: terraformLogo },
  ];

  const monitoringTools = [
    { name: "Grafana", logo: grafanaLogo },
    { name: "Prometheus", logo: prometheusLogo },
  ];

  const OsSet = [
    { name: "Linux", logo: linuxlogo },
    { name: "Windows", logo: windowslogo },
  ];

  return (
    <div
      className="w-full bg-[#f7f8fc] dark:bg-[#1b1d1e] pt-24 pb-10 relative"
      id="skills"
    >
      {/* Background Image */}
      <img
        src={m}
        alt=""
        className="absolute top-0 left-0 opacity-20"
      />

      <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <div
          className="text-3xl text-[#6d7ace] dark:text-[#6b92c9] font-bold tracking-wider text-center"
          data-aos="fade-up"
        >
          Skills
        </div>

        {/* Subtitle */}
        <div
          className="w-full sm:w-3/4 md:w-1/2 mx-auto text-lg text-black dark:text-white text-center py-4"
          data-aos="fade-up"
        >
          Here are some of my skills on which I have been working on.
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 items-start">
          
          {/* AWS Skills */}
          <div
            className="flex flex-col items-center gap-y-4 border border-[#6d7ace] 
            dark:border-[#6b92c9] rounded-xl p-5 w-full h-full"
            data-aos="fade-right"
          >
            <p className="text-[#6d7ace] dark:text-[#6b92c9] text-3xl font-bold">
              AWS Services
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              {AwsSkillsSet.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-3 border border-[#6d7ace] 
                  dark:border-[#6b92c9] min-w-[170px] px-4 py-3 rounded-lg
                  hover:scale-105 transition-all duration-200"
                >
                  <img src={skill.logo} alt="" className="w-10 h-10 object-contain" />

                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps Tools */}
          <div
            className="flex flex-col items-center gap-y-4 border border-[#6d7ace] 
            dark:border-[#6b92c9] rounded-xl p-5 w-full h-full"
            data-aos="fade-left"
          >
            <p className="text-[#6d7ace] dark:text-[#6b92c9] text-3xl font-bold">
              DevOps Tools
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              {DevOpsSkillsSet.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-3 border border-[#6d7ace] 
                  dark:border-[#6b92c9] min-w-[170px] px-4 py-3 rounded-lg
                  hover:scale-105 transition-all duration-200"
                >
                  <img src={skill.logo} alt="" className="w-10 h-10 object-contain" />

                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring Tools */}
          <div
            className="flex flex-col items-center gap-y-4 border border-[#6d7ace] 
            dark:border-[#6b92c9] rounded-xl p-5 w-full h-full"
            data-aos="fade-right"
          >
            <p className="text-[#6d7ace] dark:text-[#6b92c9] text-3xl font-bold">
              Monitoring Tools
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              {monitoringTools.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-3 border border-[#6d7ace] 
                  dark:border-[#6b92c9] min-w-[170px] px-4 py-3 rounded-lg
                  hover:scale-105 transition-all duration-200"
                >
                  <img src={skill.logo} alt="" className="w-10 h-10 object-contain" />

                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Systems */}
          <div
            className="flex flex-col items-center gap-y-4 border border-[#6d7ace] 
            dark:border-[#6b92c9] rounded-xl p-5 w-full h-full"
            data-aos="fade-left"
          >
            <p className="text-[#6d7ace] dark:text-[#6b92c9] text-3xl font-bold">
              Operating Systems
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              {OsSet.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-3 border border-[#6d7ace] 
                  dark:border-[#6b92c9] min-w-[170px] px-4 py-3 rounded-lg
                  hover:scale-105 transition-all duration-200"
                >
                  <img src={skill.logo} alt="" className="w-10 h-10 object-contain" />

                  <p className="text-lg text-black dark:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
