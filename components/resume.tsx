'use client'

import Image from 'next/image'
import { Mail, MapPin, Linkedin, Github, Presentation } from 'lucide-react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function Resume() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/3 bg-gray-800 text-white p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-48 h-48 relative overflow-hidden rounded-full mb-4">
                <Image
                  src={`${basePath}/images/shota_iwami.jpeg`}
                  alt="Shota Iwami"
                  width={200}
                  height={200}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h1 className="text-2xl font-bold">Shota Iwami</h1>
              <h3 className="text-lg font-semibold mt-2">Lead Robotics Engineer (Autonomous Driving)</h3>
              <p className="text-sm text-gray-300 mt-1">End-to-End Autonomy (VLM/VLA) | Vehicle Control | On-Vehicle Systems | Fleet Observability | SRE</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>shota.iwami@outlook.jp</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Tokyo, Japan</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 mr-2" />
                <a href="https://www.linkedin.com/in/shota-iwami" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  linkedin.com/in/shota-iwami
                </a>
              </div>
              <div className="flex items-center">
                <Github className="w-5 h-5 mr-2" />
                <a href="https://github.com/BIwashi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  github.com/BIwashi
                </a>
              </div>
              <div className="flex items-center">
                <Presentation className="w-5 h-5 mr-2" />
                <a href="https://speakerdeck.com/biwashi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  speakerdeck.com/biwashi
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 p-6">
            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Summary</h2>
              <p className="mb-3">
                I build reliability-first, end-to-end autonomous driving systems—turning raw sensor data into safe, deployable robotaxi operations on production vehicle hardware.
              </p>
              <p className="mb-3">
                I&apos;m a Lead Robotics Engineer on the Autonomous Driving team at newmo, joining as the first member and leading the initial build-out from the ground up. My current focus spans vision-language model (VLM/VLA) based end-to-end autonomy development—both direct action output and path-tracking approaches—vehicle control (MPC/MPPI), on-vehicle systems optimization on automotive-grade compute platforms, data logging strategy, and fleet observability—bringing SRE-native practices to safety-critical robotics.
              </p>
              <p>
                Previously, I worked in backend/platform engineering (Go, cloud infra, CI/CD, observability). My background in aerospace engineering (M.Eng) and UAV flight controller development grounds my approach in control theory, dynamics, sensor fusion, and hardware-aware system design.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Core Skills</h2>
              <ul className="list-disc list-inside ml-4">
                <li>End-to-End Autonomous Driving — VLM/VLA-based (direct action output & path-tracking)</li>
                <li>Vehicle control — MPC, MPPI, trajectory tracking, low-level control (PID steering/throttle)</li>
                <li>On-vehicle systems on automotive-grade compute platforms (real-time constraints)</li>
                <li>Vehicle integration — CAN, I2C, vehicle sensor interfaces</li>
                <li>Simulation & evaluation (CARLA, MetaDrive, Alpasim)</li>
                <li>Multimodal sensing (Camera, LiDAR) & vehicle odometry / localization</li>
                <li>Data logging & data-centric AI (event-based logging, dataset curation)</li>
                <li>Fleet observability & operations (telemetry, dashboards, incident response)</li>
                <li>Reliability Engineering (SRE) / Observability (OpenTelemetry, Datadog)</li>
                <li>C++, Python, Go</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Work Experience</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">newmo, Inc. - Lead Robotics Engineer / Autonomous Driving Software Engineer</h3>
                <p className="text-gray-600">April 2025 - Present</p>
                <p>Autonomous Driving team (robotaxi)</p>
                <p className="mt-2">First member of the autonomous driving team, leading the initial build-out from the ground up for end-to-end robotaxi autonomy. Developing VLM/VLA-based autonomous driving—both direct action output (end-to-end control) and path-tracking approaches with MPC/MPPI. Also implementing low-level vehicle control (PID for steering and throttle actuation). Optimizing on-vehicle systems on automotive-grade compute platforms (latency/determinism under real-time constraints), integrating vehicle interfaces (CAN/I2C), running simulation-based evaluation (CARLA, MetaDrive, Alpasim), designing data logging strategy (event-based logging, dataset curation for data-driven development), and building fleet observability (telemetry pipelines, dashboards, alerting, incident response). Bridging autonomy, platform, and vehicle integration teams across software and hardware boundaries.</p>
                <h5 className="font-semibold mt-2">Technology Stack:</h5>
                <ul className="list-disc list-inside ml-4">
                  <li>Language: C++, Python</li>
                  <li>AD: VLM/VLA-based end-to-end driving, direct action output & path-tracking</li>
                  <li>Hardware: Automotive-grade compute platforms</li>
                  <li>Control: MPC, MPPI, trajectory tracking, low-level control (PID)</li>
                  <li>Simulation: CARLA, MetaDrive, Alpasim</li>
                  <li>Sensing: Camera, LiDAR, vehicle sensors</li>
                  <li>Tools: CAD (mechanical design)</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">newmo, Inc. - Platform Engineer (Taxi / Rideshare)</h3>
                <p className="text-gray-600">November 2024 - March 2025</p>
                <p className="mt-2">Improved CI/CD and developer experience to increase delivery speed without sacrificing stability. Built and operated observability foundations and production readiness practices.</p>
                <h5 className="font-semibold mt-2">Technology Stack:</h5>
                <ul className="list-disc list-inside ml-4">
                  <li>Observability: Datadog, OpenTelemetry</li>
                  <li>IaC / CI/CD: Terraform, GitHub Actions</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">CyberAgent, Inc. - Backend Engineer</h3>
                <p className="text-gray-600">April 2022 - October 2024</p>
                <p>AI Business Division, Co-creation Retail Media Division</p>
                <div className="mt-2">
                  <h4 className="font-semibold">Development of a new app for a major drugstore (April 2023 - October 2024)</h4>
                  <p>Developing a new app for users with millions of potential users. Involved in API development for the backend, integration with external services, load testing, and building and operating observability infrastructure. Also, actively promoting trunk-based development to improve development speed.</p>
                  <h5 className="font-semibold mt-2">Technology Stack:</h5>
                  <ul className="list-disc list-inside ml-4">
                    <li>Language: Go</li>
                    <li>Infrastructure: AWS (ECS on Fargate, Aurora Serverless v2, DynamoDB)</li>
                    <li>DWH: Snowflake</li>
                    <li>Service-to-service communication: gRPC（grpc-web/envoy）</li>
                    <li>CI/CD: GitHub Actions/PipeCD</li>
                    <li>IaC: Terraform</li>
                    <li>feature flag: OpenFeature</li>
                    <li>Load testing: k6</li>
                    <li>o11y tools: Datadog</li>
                    <li>Others: GitHub, Slack, Linear, Notion, Confluence</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">CRM system construction/mobile app/website/data migration for a foreign apparel company (April 2022 - March 2023)</h4>
                  <p>Conducted integration of multiple brands and platforms, constructed a new CRM system, and migrated data. Participated from the initial stage of 0{'>'}1, involved in requirements definition/design/implementation/load testing/release/operation. Mainly responsible for member-related functions and integration with external services.</p>
                  <h5 className="font-semibold mt-2">Technology Stack:</h5>
                  <ul className="list-disc list-inside ml-4">
                    <li>Language: Go</li>
                    <li>Infrastructure: Google Cloud Platform (Cloud Run, Cloud Spanner, Cloud Function, PubSub)</li>
                    <li>DWH: Snowflake</li>
                    <li>Service-to-service communication: gRPC/REST（grpc-gateway）</li>
                    <li>CI/CD: GitHub Actions/PipeCD</li>
                    <li>IaC: Terraform</li>
                    <li>Load testing: k6</li>
                    <li>o11y tools: Datadog</li>
                    <li>Others: GitHub, Slack, Notion, Confluence, Jira</li>
                  </ul>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">GREE, Inc. - Full Stack Engineer (Internship)</h3>
                <p className="text-gray-600">January 2021 - September 2021</p>
                <p>Aumo Inc.</p>
                <p className="mt-2">Development of &quot;aumo,&quot; a media platform. Involved in basic implementation of the backend and performance tuning of the frontend.</p>
                <h5 className="font-semibold mt-2">Technology Stack:</h5>
                <ul className="list-disc list-inside ml-4">
                  <li>Language: Ruby（Ruby on Rails）</li>
                  <li>Infrastructure: AWS</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Space Entertainment Laboratory, Inc. - Software and Hardware Engineer (Internship)</h3>
                <p className="text-gray-600">January 2019 - March 2022</p>
                <p className="mt-2">Development of a flying boat-type drone with wings. Developed and tuned the flight controller software (attitude control, trajectory following), manufactured the aircraft, and designed airframe components using CAD.</p>
                <h5 className="font-semibold mt-2">Technology Stack:</h5>
                <ul className="list-disc list-inside ml-4">
                  <li>Language: C++/Python</li>
                  <li>Software: PX4 Autopilot (flight controller development) / Arduino</li>
                  <li>Hardware: Pixhawk, IMU, GPS, barometer</li>
                  <li>Tools: SOLIDWORKS</li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Education</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Tokyo Metropolitan University Graduate School</h3>
                <p className="text-gray-600">2020 - 2022</p>
                <p>Master of Engineering, Aerospace Engineering</p>
                <p className="mt-2">Thesis: &quot;Flight Experiment of Four-dimensional Navigation for Drones Assuming Unmanned Aircraft Traffic Management&quot;</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Tokyo Metropolitan University</h3>
                <p className="text-gray-600">April 2016 - March 2020</p>
                <p>Bachelor of Engineering, Aerospace Engineering</p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Public Speaking</h2>
              <ul className="space-y-4">
                <li className="relative before:content-[''] before:absolute before:-left-2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300">
                  <h3 className="font-semibold">Datadog DASH 2025 — New York, USA (June 2025)</h3>
                  <p className="text-sm text-gray-500">Speaker (Datadog&apos;s flagship annual conference)</p>
                  <p>Topic: &quot;Monorepo Error Management: Automated Runbooks and Team-Targeted Alert Distribution&quot;</p>
                </li>
                <li>
                  <h3 className="font-semibold">Top 4 Load Testing Tools! User Insights into Effective Performance Testing Practices (September 2024)</h3>
                  <p>Topic: &quot;Building a Scalable and Reproducible Load Testing Platform with k6&quot;</p>
                </li>
                <li>
                  <h3 className="font-semibold">Learn from Real-World Use Cases! The Unknown World of Datadog (August 2024)</h3>
                  <p>Topic: &quot;Advanced techniques for leveraging Datadog&apos;s features&quot;</p>
                </li>
                <li>
                  <h3 className="font-semibold">OpenTelemetry Meetup #3 (June 2024)</h3>
                  <p>Topic: &quot;Feature Flags and OpenTelemetry&quot;</p>
                </li>
                <li>
                  <h3 className="font-semibold">CloudNative Days SUMMER 2024 (June 2024)</h3>
                  <p>Topic: &quot;Declarative Aggregation Management of Feature Flags Using OpenFeature and Code Generation&quot;</p>
                </li>
                <li>
                  <h3 className="font-semibold">Go Conference 2024 (June 2024)</h3>
                  <p>Topic: &quot;Building Go AST from Unified Diff Format Differences for Automatic Feature Flag Instrumentation&quot;</p>
                </li>
                <li>
                  <h3 className="font-semibold">DevOpsDays TOKYO 2024 (August 2024)</h3>
                  <p>Topic: &quot;Unified Management of Errors, Alerts, and Runbooks Using Code Generation to Reduce Operational Costs&quot;</p>
                </li>
                <li>
                  <h3 className="font-semibold">Go Conference mini 2023 Winter IN KYOTO (December 2023)</h3>
                  <p>Topic: &quot;Efficient Load Testing Strategies Using Go&apos;s Protoc Plugin&quot;</p>
                </li>
                <li>
                  <h3 className="font-semibold">Observability Study Group #1 (July 2023)</h3>
                  <p>Topic: &quot;Implementing Observability in Microservices&quot;</p>
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Certifications</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold">Datadog Fundamentals (July 2023)</span> - Datadog
                </li>
                <li>
                  <span className="font-semibold">Professional Cloud Architect (April 2023)</span> - Google Cloud
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Other</h2>
              <div>
                <h3 className="text-xl font-semibold">The 15th All-Japan Student Indoor Flying Robot Contest (September 2019)</h3>
                <p>5th place / 3D EXPERIENCE（CATIA）Award</p>
                <p className="mt-2">A competition to create a small-sized flying robot that meets the specified regulations and perform a certain mission with high scores and short time. Participated as a member of the research lab. Mainly responsible for hardware aspects such as design and manufacturing of the aircraft.</p>
                <h5 className="font-semibold mt-2">Technology Stack:</h5>
                <ul className="list-disc list-inside ml-4">
                  <li>3D CAD: CATIA/Fusion360</li>
                  <li>Hardware: Arduino</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
