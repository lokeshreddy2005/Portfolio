import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "distributed-job-processing",
    title: "Fault-Tolerant Distributed Job Processing System",
    shortDescription:
      "An asynchronous job processing platform with worker pools, at-least-once delivery, and crash recovery over Redis Streams.",
    category: "Backend Systems",
    technologies: ["Python", "FastAPI", "Redis Streams", "PostgreSQL"],
    featured: true,
    tracks: ["software", "quant"],
    github: undefined, // TODO: add this project's repo URL
    highlights: [
      "Built a fault-tolerant asynchronous job processing platform with worker pools, explicit job lifecycle management, retries, dead-letter queues, and persistent state-transition history.",
      "Implemented at-least-once delivery using Redis consumer groups, stale-message reclamation, exponential-backoff retries, and hash-based idempotency for safe recovery from worker crashes.",
    ],
    problem:
      "Background job systems fail quietly — a worker crash mid-task can silently drop work or, worse, execute it twice. Building for fault tolerance means treating crashes as the normal case, not the edge case.",
    approach: [
      "Modeled an explicit job lifecycle with persistent state-transition history in PostgreSQL, so a job's full history is inspectable, not just its current status.",
      "Used Redis Streams consumer groups to distribute jobs across a worker pool with at-least-once delivery semantics.",
      "Added stale-message reclamation so jobs claimed by a crashed worker are automatically picked up by another worker after a timeout.",
      "Layered exponential-backoff retries and a dead-letter queue for repeatedly failing jobs, plus hash-based idempotency keys so retried or reclaimed jobs can't double-execute.",
    ],
    learnings: [
      "At-least-once delivery pushes the correctness problem onto idempotency — the real engineering work was making retries and reclamation safe, not making them possible.",
      "Persisting the full state-transition history, not just current state, made debugging stuck jobs dramatically easier than reasoning from logs alone.",
    ],
  },
  {
    slug: "hybrid-search",
    title: "Hybrid Search & Retrieval Engine",
    shortDescription:
      "An information-retrieval engine combining from-scratch BM25 lexical search with dense embeddings and FAISS vector search.",
    category: "Machine Learning",
    technologies: [
      "Python",
      "FastAPI",
      "FAISS",
      "Sentence Transformers",
      "BM25",
    ],
    featured: true,
    tracks: ["software", "quant"],
    github: undefined, // TODO: add this project's repo URL
    highlights: [
      "Built a hybrid information-retrieval engine combining a from-scratch inverted index and BM25 lexical retrieval with dense Sentence Transformer embeddings and FAISS vector search.",
      "Implemented Reciprocal Rank Fusion and a labeled evaluation pipeline to compare lexical, dense, and hybrid retrieval, with reproducible indexing, API serving, and performance benchmarking.",
    ],
    problem:
      "Pure lexical search (BM25) misses semantically related results that don't share exact terms, while pure dense retrieval can miss exact-match precision — combining them well, rather than picking one, is the actual engineering problem.",
    approach: [
      "Implemented an inverted index and BM25 scoring from scratch for lexical retrieval.",
      "Indexed the same corpus with Sentence Transformer embeddings into a FAISS vector index for dense retrieval.",
      "Combined both rankings with Reciprocal Rank Fusion rather than a learned re-ranker, keeping the system simple and tunable.",
      "Built a labeled evaluation pipeline to benchmark lexical-only, dense-only, and hybrid retrieval against each other, and exposed indexing/search through a FastAPI service.",
    ],
    learnings: [
      "Reciprocal Rank Fusion is a surprisingly strong baseline for combining rankings — it beat naive score-normalization blending without needing any tuning.",
      "The evaluation pipeline mattered as much as the retrieval code itself — without labeled queries to benchmark against, \"hybrid is better\" is just an assumption.",
    ],
  },
  {
    slug: "cross-sectional-momentum-alpha",
    title: "Cross-Sectional Momentum Alpha Research & Backtesting",
    shortDescription:
      "A 12–1 month cross-sectional momentum strategy backtested with a dollar-neutral long/short portfolio and strict point-in-time evaluation.",
    category: "Quantitative Finance",
    technologies: ["Python", "NumPy", "Pandas", "yfinance"],
    featured: true,
    tracks: ["quant"],
    github: undefined, // TODO: add this project's repo URL
    highlights: [
      "Researched a 12–1 month cross-sectional momentum signal using a dollar-neutral long/short portfolio with monthly rebalancing across liquid U.S. equities.",
      "Built a vectorized backtesting framework with point-in-time alignment, transaction costs, slippage, out-of-sample evaluation, and automated safeguards against look-ahead bias.",
    ],
    problem:
      "Momentum signals are notoriously easy to backtest incorrectly — look-ahead bias and unrealistic cost assumptions can turn a mediocre signal into an apparently great one on paper.",
    approach: [
      "Constructed a 12-month-minus-1-month cross-sectional momentum signal (skipping the most recent month to avoid short-term reversal effects) across a universe of liquid U.S. equities.",
      "Formed a dollar-neutral long/short portfolio, rebalanced monthly, ranking assets by trailing momentum.",
      "Built the backtest engine to be vectorized rather than loop-based for speed, with strict point-in-time data alignment so no future information leaks into a given rebalance date.",
      "Modeled transaction costs and slippage explicitly, and held out an out-of-sample period for evaluation rather than reporting in-sample results alone.",
    ],
    learnings: [
      "Most of the effort in a backtest isn't the signal — it's eliminating the dozen small ways look-ahead bias sneaks in through data alignment.",
      "A signal that looks strong gross of costs can be marginal net of realistic transaction costs and slippage; testing both is non-negotiable.",
    ],
  },
  {
    slug: "graphx",
    title: "GraphX — Graph Domain-Specific Language",
    shortDescription:
      "A domain-specific language for graph programming with first-class graph, vertex-set, and edge-set abstractions.",
    category: "Compilers & PL",
    technologies: ["C++", "Compiler Design", "Lexing & Parsing", "Code Generation"],
    team: "Team of 6",
    featured: true,
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Designed a DSL for graph programming with first-class graph, vertex-set, and edge-set abstractions, enabling high-level construction and manipulation of dynamic graphs.",
      "Defined graph-specific operators and built-in algorithms including BFS/DFS, Dijkstra, Bellman-Ford, MST, topological sorting, connected components, bridges, and articulation points.",
      "Developed density-aware graph optimizations that select adjacency-list, adjacency-matrix, or hybrid representations based on graph density to improve storage and algorithmic efficiency.",
    ],
    problem:
      "Expressing graph algorithms in general-purpose languages means re-implementing traversal, representation, and bookkeeping logic every time — a purpose-built language can make graphs a native concept instead.",
    approach: [
      "Built the language front-end (lexer, parser, and AST) around graph, vertex-set, and edge-set as first-class types rather than library objects.",
      "Implemented a standard library of built-in algorithms (BFS/DFS, Dijkstra, Bellman-Ford, MST, topological sort, connected components, bridges, articulation points) directly against those abstractions.",
      "Added a density-aware optimization pass that picks adjacency-list, adjacency-matrix, or a hybrid representation per graph, trading memory for lookup speed depending on how dense the graph is.",
    ],
    learnings: [
      "Choosing the right internal representation automatically (rather than making the programmer pick) removed an entire class of performance bugs from downstream code written in the language.",
      "Designing a compiler as a team of six meant the AST and IR contracts needed to be nailed down early — most integration pain came from ambiguity there, not from codegen itself.",
    ],
  },
  {
    slug: "distributed-bitcoin-mining-framework",
    title: "Distributed Bitcoin Mining Framework",
    shortDescription:
      "A parallel nonce-search framework comparing multithreaded, work-stealing, and MPI-based distributed mining strategies.",
    category: "Distributed Computing",
    technologies: ["C++", "MPI", "Pthreads", "OpenSSL", "SHA-256"],
    team: "Team of 2",
    featured: true,
    tracks: ["software", "quant"],
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Designed a Bitcoin mining framework implementing static multithreaded partitioning, dynamic work stealing, and MPI-based distributed mining for parallel nonce search using SHA-256 hashing.",
      "Implemented dynamic work distribution and parallel execution across threads and processes, addressing load imbalance in fixed-partition mining through fine-grained work allocation.",
      "Developed a distributed mining architecture with Raft-based leader election, checkpointing, and fault-recovery mechanisms, enabling resilient multi-node execution.",
      "Benchmarked the three execution models across varying thread/process counts and mining difficulty, analyzing scalability, load balancing, runtime, and communication overhead.",
    ],
    problem:
      "Searching for a valid SHA-256 nonce is embarrassingly parallel in theory, but naive fixed partitioning leaves workers idle once their range is exhausted — the interesting problem is keeping every worker busy without a coordination bottleneck.",
    approach: [
      "Started with static multithreaded partitioning as a baseline, then implemented dynamic work stealing so idle threads pull unclaimed ranges from busy ones.",
      "Extended the same ideas across process boundaries with MPI, distributing nonce ranges across multiple nodes.",
      "Added Raft-based leader election, checkpointing, and fault recovery so the cluster could keep making progress if a node dropped out mid-search.",
      "Benchmarked all three execution models (static, work-stealing, MPI-distributed) across thread/process counts and difficulty levels to compare scalability, load balancing, runtime, and communication overhead.",
    ],
    learnings: [
      "Work-stealing closed most of the gap from load imbalance, but the coordination overhead it introduced only paid off past a certain thread count — below that, static partitioning was simply cheaper.",
      "Adding fault tolerance (leader election, checkpointing) is a different engineering problem from adding parallelism, and it's easy to underestimate how much of the system it touches.",
    ],
  },
  {
    slug: "limit-order-book",
    title: "Limit Order Book",
    shortDescription:
      "[Placeholder] A limit order book / matching engine project — description pending real details.",
    category: "Quantitative Finance",
    technologies: ["TODO: add tech stack"],
    featured: false,
    tracks: ["quant"],
    incomplete: true,
    github: undefined, // TODO: add this project's repo URL
    highlights: [
      "This entry is a placeholder — tell Claude (or edit data/projects.ts directly) what your limit order book implementation does: matching engine design (price-time priority, order types supported), data structures used, and any performance results or benchmarks.",
    ],
  },
  {
    slug: "document-management-repository",
    title: "Document Management Repository",
    shortDescription:
      "A full-stack document platform with AI-powered tagging, intelligent vault routing, and secure workspace management.",
    category: "Full Stack",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "AWS S3",
      "Groq LLaMA",
      "JWT",
    ],
    team: "Team of 6",
    featured: false,
    github: undefined, // TODO: add this project's specific repo URL
    live: "https://document-management-repository.vercel.app/",
    highlights: [
      "AI-powered document tagging and intelligent vault routing using Groq LLaMA, alongside manual organization and full document lifecycle management.",
      "REST-based architecture built with React, Node.js, Express.js, and MongoDB, with AWS S3 for streaming file storage and Redis caching for frequently accessed resources.",
      "Secure document and workspace management with JWT authentication, role-based access control, developer API keys, granular permissions, storage quotas, audit functionality, and soft-delete/recovery workflows.",
    ],
    problem:
      "Teams accumulating large volumes of documents need a way to organize, secure, and retrieve files without manually tagging every upload or managing storage sprawl by hand.",
    approach: [
      "Designed a REST API on Node.js/Express with MongoDB as the primary store, layering Redis in front of frequently accessed resources to keep read latency low.",
      "Streamed file uploads and downloads directly to AWS S3 rather than buffering through the application server.",
      "Wired Groq LLaMA into the ingestion pipeline to auto-tag and route incoming documents into the right vault, with manual override for edge cases.",
      "Implemented JWT-based auth, role-based access control, and developer API keys so the platform could support both interactive users and programmatic integrations.",
      "Added storage quotas, audit logging, and soft-delete with recovery so destructive actions are reversible and traceable.",
    ],
    learnings: [
      "Combining an LLM-driven classification step with a deterministic permissions layer meant the AI could be wrong about a tag without ever being wrong about who could see a document.",
      "Soft-delete and audit trails are cheap to build early and expensive to retrofit once real data is in the system.",
    ],
  },
  {
    slug: "span-aware-cross-utterance-model",
    title: "Span-Aware Cross-Utterance Model (SACUM)",
    shortDescription:
      "A modular architecture for emotion-cause pair extraction from multi-turn conversations, paired with an emotion-anchored summarization pipeline.",
    category: "Natural Language Processing",
    technologies: [
      "PyTorch",
      "DeBERTa-v3-large",
      "FLAN-T5",
      "HuggingFace",
      "BERTScore",
      "UniEval",
    ],
    team: "Team of 3",
    featured: false,
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Developed a modular architecture for Emotion-Cause Pair Extraction (ECPE) from multi-turn conversational datasets using DeBERTa-v3-large with speaker and turn-position representations.",
      "Incorporated causal cross-utterance attention with temporal masking and a memory-efficient factored pair-scoring mechanism to model relationships between emotion and cause spans while controlling GPU memory usage.",
      "Built an emotion-anchored summarization pipeline using FLAN-T5, generating conversational narratives conditioned on extracted emotion-cause pairs and evaluating outputs using BERTScore and UniEval.",
      "Integrated configurable training and evaluation workflows with automatic mixed precision, dynamic batching, checkpointing, and command-line configuration.",
    ],
    problem:
      "Emotion-Cause Pair Extraction over multi-turn conversations needs to reason across utterances, not just within one — a span in an earlier turn can be the cause of an emotion expressed several turns later.",
    approach: [
      "Encoded conversations with DeBERTa-v3-large, augmented with speaker and turn-position representations so the model has a notion of who said what, when.",
      "Added causal cross-utterance attention with temporal masking so cause spans can only attend to information available up to that point in the conversation.",
      "Used a factored pair-scoring mechanism instead of scoring every span pair densely, keeping GPU memory usage tractable on longer conversations.",
      "Layered an emotion-anchored summarization pipeline on top using FLAN-T5, conditioning generated narratives on the extracted emotion-cause pairs, and evaluated summaries with BERTScore and UniEval.",
    ],
    learnings: [
      "Naively scoring all span pairs across a long conversation blows up memory fast; factoring the scoring function was the difference between running on a single GPU and needing multiple.",
      "Good extraction doesn't automatically produce good summaries — conditioning the generator explicitly on the extracted pairs mattered more than model size.",
    ],
  },
  {
    slug: "congestion-aware-aodv",
    title: "Congestion-Aware AODV (CA-AODV)",
    shortDescription:
      "An extension to the AODV routing protocol adding congestion-aware route selection for dynamic network conditions.",
    category: "Networking",
    technologies: ["C++", "NS-3"],
    team: "Team of 6",
    featured: false,
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Extended the AODV routing protocol in NS-3 with congestion-aware route selection using queue occupancy and composite routing metrics for dynamic network conditions.",
      "Implemented and evaluated enhanced routing strategies incorporating ETX, congestion-aware path costs, hysteresis-based route switching, and TTL-based route discovery optimization.",
      "Compared CA-AODV against baseline AODV across network scenarios using Packet Delivery Ratio, latency, routing stability, and load-balancing metrics.",
    ],
  },
  {
    slug: "risc-v-simulator",
    title: "RISC-V Simulator",
    shortDescription:
      "A custom simulator that decodes and executes the RV32I instruction set with memory, register, and CLI debugging support.",
    category: "Systems",
    technologies: ["C++", "RV32I", "Computer Architecture"],
    featured: false,
    tracks: ["software"],
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Built a custom simulator to decode and execute the RV32I instruction set with memory and register modules.",
      "Enabled debugging via a CLI interface and memory inspection features.",
    ],
  },
  {
    slug: "cache-simulator",
    title: "Cache Simulator",
    shortDescription:
      "A CPU cache simulator supporting direct-mapped, set-associative, and fully-associative configurations.",
    category: "Systems",
    technologies: ["C++", "Computer Architecture"],
    featured: false,
    tracks: ["software"],
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Designed and evaluated a CPU cache simulator in C++ with support for direct-mapped, set-associative, and fully-associative configurations.",
      "Benchmarked hit/miss ratios under multiple replacement policies.",
    ],
  },
  {
    slug: "multithreaded-sudoku-validator",
    title: "Multithreaded Sudoku Validator",
    shortDescription:
      "A concurrent Sudoku validator comparing TAS, CAS, and Bounded CAS synchronization primitives.",
    category: "Systems",
    technologies: ["C++", "Concurrency"],
    featured: false,
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Used TAS, CAS, and Bounded CAS for concurrency control and validated Sudoku grids in parallel.",
      "Measured execution performance over varying thread counts and grid sizes.",
    ],
  },
  {
    slug: "semaphore-synchronization",
    title: "Semaphore Synchronization",
    shortDescription:
      "Classic OS synchronization problems solved with semaphores, including fair readers-writers and writers-preference.",
    category: "Systems",
    technologies: ["C++", "Operating Systems"],
    featured: false,
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Implemented C++ solutions for the Fair Readers-Writers and Writers-Preference problems using semaphores.",
      "Conducted worst-case and average access time analysis.",
    ],
  },
  {
    slug: "infinite-precision-arithmetic",
    title: "Infinite-Precision Arithmetic",
    shortDescription:
      "Arbitrary-precision integer and floating-point arithmetic implemented from scratch in C++.",
    category: "Systems",
    technologies: ["C++"],
    featured: false,
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Implemented arithmetic operations (add, sub, mult, div) for arbitrarily large integers and floating-point numbers.",
      "Used string manipulation and dynamic memory handling to work around native language limitations.",
    ],
  },
  {
    slug: "helmet-detection-yolov8",
    title: "Helmet Detection using YOLOv8",
    shortDescription:
      "A fine-tuned YOLOv8 model detecting helmet violations in traffic scenes with real-time visualization.",
    category: "Machine Learning",
    technologies: ["Python", "PyTorch", "YOLOv8"],
    featured: false,
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Trained a YOLOv8 model to detect helmet violations in traffic scenes using bounding box annotations.",
      "Fine-tuned with transfer learning and visualized results with real-time detection support.",
    ],
  },
  {
    slug: "food-image-classifier",
    title: "Food Image Classifier",
    shortDescription:
      "A CNN that classifies food images into 10 categories, exploring pretrained backbones for accuracy gains.",
    category: "Machine Learning",
    technologies: ["Python", "TensorFlow", "Keras"],
    featured: false,
    github: undefined, // TODO: add this project's specific repo URL
    highlights: [
      "Developed a CNN model to classify food images into 10 categories.",
      "Applied data augmentation and explored pretrained models like ResNet for accuracy improvement.",
    ],
  },
];

export const projectCategories = Array.from(
  new Set(projects.map((p) => p.category))
);

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByTrack(track: "software" | "quant") {
  return projects.filter((p) => p.tracks?.includes(track) && !p.incomplete);
}
