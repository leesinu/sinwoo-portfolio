"use client";

import { useState } from "react";
import Image from "next/image";

// 프로젝트 타입 정의
interface Project {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    details: string;
    images: { name: string; src: string; description: string }[];
}

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "멀티플레이 RPG 게임",
            description: "유니티와 Mirror를 활용하여 개발한 4인 협동 멀티플레이 RPG 게임.",
            videoUrl: "https://www.youtube-nocookie.com/embed/so8eWI8hvxM",
            details: `
                이 프로젝트에서는 Mirror 네트워크를 사용하여 플레이어 동기화 및 서버-클라이언트 구조를 구현했습니다.
                다양한 직업과 스킬 시스템을 도입하여 팀 플레이를 강조했습니다.
                
                주요 기능:
                - 실시간 멀티플레이 동기화
                - AI 기반 몬스터 시스템
                - 캐릭터 성장 및 장비 시스템
                - 다양한 던전과 보스 레이드
            `,
            images: [
                { name: "PlayerMove 코드", src: "/images/project1-1.jpg", description: "이 코드는 플레이어의 이동을 담당하며, Rigidbody를 활용하여 부드러운 움직임을 구현했습니다." },
                { name: "EnemyAI 코드", src: "/images/project1-2.jpg", description: "적 AI의 행동 패턴을 정의하는 코드입니다. 상태 머신을 활용하여 AI가 다양한 상황에 대응하도록 설계되었습니다." },
                { name: "Networking 코드", src: "/images/project1-3.jpg", description: "Mirror 네트워크를 사용하여 멀티플레이 환경에서 클라이언트-서버 간 동기화를 처리하는 코드입니다." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">이신우의 포트폴리오</h1>
                    <p className="text-gray-600">게임 클라이언트 | 유니티 | 멀티플레이 시스템</p>
                </header>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">프로젝트</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project) => (
                            <div key={project.id} className="p-4 bg-white shadow-md rounded-xl">
                                <h3 className="text-lg font-medium">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                                <button
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    자세히 보기
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {selectedProject !== null && (
                    <section className="p-4 bg-white shadow-md rounded-xl mt-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{selectedProject.title}</h2>
                        {selectedProject.videoUrl && (
                            <div className="mb-4">
                                <iframe
                                    className="w-full h-64 rounded-lg"
                                    src={selectedProject.videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                ></iframe>
                            </div>
                        )}
                        <p className="text-gray-600 whitespace-pre-line">{selectedProject.details}</p>
                        <div className="space-y-6 mt-4">
                            {selectedProject.images.map((img, index) => (
                                <div key={index} className="space-y-2">
                                    <h3 className="text-lg font-semibold text-gray-700">{img.name}</h3>
                                    <Image
                                        src={img.src}
                                        alt={img.name}
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow w-full"
                                    />
                                    <p className="text-gray-600">{img.description}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => setSelectedProject(null)}
                        >
                            닫기
                        </button>
                    </section>
                )}

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">기술 스택</h2>
                    <div className="flex flex-wrap gap-2">
                        {['유니티', 'C#', 'Mirror', '리액트', 'Next.js', 'Vercel'].map((tech) => (
                            <span key={tech} className="px-4 py-2 bg-gray-200 rounded-lg text-gray-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">연락처</h2>
                    <p className="text-gray-600">문의는 아래로 연락 주세요:</p>
                    <p className="text-gray-800 font-medium">📧 sinu@example.com</p>
                    <p className="text-gray-800 font-medium">🔗 <a href="https://github.com/sinu" className="underline">깃허브</a></p>
                </section>
            </div>
        </div>
    );
}
