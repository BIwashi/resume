'use client'

import Image from 'next/image'
import { Mail, MapPin, Calendar, Linkedin, Github } from 'lucide-react'

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
                  src="/images/shota_iwami.jpeg"
                  alt="Shota Iwami"
                  width={200}
                  height={200}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h1 className="text-2xl font-bold">Shota Iwami</h1>
              <h3 className="text-lg font-semibold mt-2">Software Engineer</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>shota.iwami@outlook.jp</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Setagaya, Tokyo, Japan</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>August 19, 1997</span>
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
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 p-6">
            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Summary</h2>
              <p>
                As a Backend Engineer, I have been involved in the development of large-scale applications and the construction of new CRM systems.
                Primarily using Go, I have experience in designing and implementing microservices architecture, load testing, and building observability infrastructure.
                I am also proactive in introducing efficient development processes such as trunk-based development and feature flag utilization.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300">Work Experience</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">CyberAgent, Inc. - Backend Engineer</h3>
                <p className="text-gray-600">April 2022 - Present</p>
                <p>AI Business Division, Co-creation Retail Media Division</p>
                <div className="mt-2">
                  <h4 className="font-semibold">Development of a new app for a major drugstore (April 2023 - Present)</h4>
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
                  <p>Conducted integration of multiple brands and platforms, constructed a new CRM system, and migrated data. Participated from the initial stage of 0->1, involved in requirements definition/design/implementation/load testing/release/operation. Mainly responsible for member-related functions and integration with external services.</p>
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
                <p className="mt-2">Development of "aumo," a media platform. Involved in basic implementation of the backend and performance tuning of the frontend.</p>
                <h5 className="font-semibold mt-2">Technology Stack:</h5>
                <ul className="list-disc list-inside ml-4">
                  <li>Language: Ruby（Ruby on Rails）</li>
                  <li>Infrastructure: AWS</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Space Entertainment Laboratory, Inc. - Software and Hardware Engineer (Internship)</h3>
                <p className="text-gray-600">January 2019 - March 2022</p>
                <p className="mt-2">Development of a flying boat-type drone with wings. Involved in software development of the flight controller, manufacturing of the aircraft, and design using CAD.</p>
                <h5 className="font-semibold mt-2">Technology Stack:</h5>
                <ul className="list-disc list-inside ml-4">
                  <li>Language: C++/Python</li>
                  <li>Software: PX4 Auto Pilot / Arduino</li>
                  <li>Hardware: Pixhawk</li>
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
                <p className="mt-2">Thesis: "Flight Experiment of Four-dimensional Navigation for Drones Assuming Unmanned Aircraft Traffic Management"</p>
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
                <li>
                  <h3 className="font-semibold">OpenTelemetry Meetup #3 (June 2024)</h3>
                  <p>Topic: "Feature Flags and OpenTelemetry"</p>
                </li>
                <li>
                  <h3 className="font-semibold">CloudNative Days SUMMER 2024 (June 2023)</h3>
                  <p>Topic: "Declarative Aggregation Management of Feature Flags Using OpenFeature and Code Generation"</p>
                </li>
                <li>
                  <h3 className="font-semibold">Go Conference 2024 (June 2023)</h3>
                  <p>Topic: "Building Go AST from Unified Diff Format Differences for Automatic Feature Flag Instrumentation"</p>
                </li>
                <li>
                  <h3 className="font-semibold">DevOpsDays TOKYO 2024 (June 2023)</h3>
                  <p>Topic: "Unified Management of Errors, Alerts, and Runbooks Using Code Generation to Reduce Operational Costs"</p>
                </li>
                <li>
                  <h3 className="font-semibold">Go Conference mini 2023 Winter IN KYOTO (December 2023)</h3>
                  <p>Topic: "Efficient Load Testing Strategies Using Go's Protoc Plugin"</p>
                </li>
                <li>
                  <h3 className="font-semibold">Observability Study Group #1 (July 2023)</h3>
                  <p>Topic: "Implementing Observability in Microservices"</p>
                </li>
                <li>
                  <h3 className="font-semibold">CyberAgent Internal Tech Conference (March 2023)</h3>
                  <p>Topic: "Implementing Feature Flags in Go"</p>
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
