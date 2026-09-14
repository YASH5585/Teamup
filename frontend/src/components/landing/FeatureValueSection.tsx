import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export function FeatureValueSection() {
  return (
    <section
      aria-labelledby="value-stories-heading"
      className="w-full pb-20 sm:pb-28 lg:pb-36"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 sm:mb-24">
          <Badge
            variant="accent"
            dot
            className="text-xs font-semibold uppercase tracking-wider"
          >
            Why TeamUp
          </Badge>

          <h2
            id="value-stories-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#484848] leading-tight max-w-2xl"
          >
            Built for how student teams actually form.
          </h2>

          <p className="text-base sm:text-lg text-[#5f6368] max-w-2xl leading-relaxed">
            Finding teammates should not be guesswork. TeamUp provides structure,
            clarity, and alignment from your initial idea to the final submission.
          </p>
        </div>

        {/* Feature / Value Stories */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {/* Story 1: Start With Who You Have */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Text */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#007aff]">
                  01
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-[#787878]">
                  Start With Who You Have
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848] leading-snug">
                Already have a few people? Start there. TeamUp helps you see what&apos;s missing.
              </h3>

              <p className="text-base text-[#5f6368] leading-relaxed">
                You do not need an entire squad before you begin. Gather your existing
                friends or classmates into a workspace, outline your project goals, and
                instantly visualize the exact skill gaps and unfilled responsibilities.
              </p>

              <div className="pt-2">
                <ul className="space-y-2 text-sm text-[#5f6368]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#007aff] shrink-0" aria-hidden="true" />
                    <span>Import or assemble initial collaborators without friction</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#007aff] shrink-0" aria-hidden="true" />
                    <span>Map member proficiencies against competition requirements</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#007aff] shrink-0" aria-hidden="true" />
                    <span>Highlight unfilled roles before the event begins</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Illustrative Product UI: Team Roster with Missing Slot */}
            <div className="lg:col-span-7">
              <Card
                variant="white"
                radius="large"
                className="p-6 sm:p-8 space-y-5 border-[#e8e8e8]"
              >
                {/* Roster Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#f0f0f0]">
                  <div>
                    <span className="text-xs font-medium text-[#787878]">Project Workspace</span>
                    <h4 className="text-base font-bold text-[#484848]">Autonomous Drone Challenge</h4>
                  </div>
                  <Badge variant="accent" className="text-xs font-semibold">
                    3 of 4 Spots Filled
                  </Badge>
                </div>

                {/* Team Members List */}
                <div className="space-y-3">
                  {/* Member 1 */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fafafa] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center text-xs font-bold text-[#484848]">
                        TM
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-[#484848]">Team Lead &amp; Frontend</p>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#eef5fc] text-[#007aff] font-medium">Confirmed</span>
                        </div>
                        <p className="text-xs text-[#787878]">React &bull; TypeScript &bull; UI/UX</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#5f6368] hidden sm:inline">15 hrs/wk</span>
                  </div>

                  {/* Member 2 */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fafafa] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center text-xs font-bold text-[#484848]">
                        CV
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-[#484848]">Computer Vision Engineer</p>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#eef5fc] text-[#007aff] font-medium">Confirmed</span>
                        </div>
                        <p className="text-xs text-[#787878]">PyTorch &bull; OpenCV &bull; Python</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#5f6368] hidden sm:inline">20 hrs/wk</span>
                  </div>

                  {/* Member 3 */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fafafa] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center text-xs font-bold text-[#484848]">
                        EM
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-[#484848]">Embedded Systems</p>
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#eef5fc] text-[#007aff] font-medium">Confirmed</span>
                        </div>
                        <p className="text-xs text-[#787878]">C++ &bull; ROS2 &bull; Microcontrollers</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#5f6368] hidden sm:inline">15 hrs/wk</span>
                  </div>

                  {/* Unfilled Slot (Visible Missing Piece) */}
                  <div className="p-4 rounded-2xl border-2 border-dashed border-[#007aff]/35 bg-[#007aff]/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#007aff] animate-pulse" aria-hidden="true" />
                          <p className="text-sm font-bold text-[#007aff]">Missing Role: Backend &amp; Cloud Systems</p>
                        </div>
                        <p className="text-xs text-[#5f6368]">
                          Targeted requirement: Real-time telemetry streaming &bull; Distributed databases
                        </p>
                      </div>
                      <span className="inline-flex items-center justify-center self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold bg-[#007aff] text-white">
                        Open Slot
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Story 2: Find The Missing Piece (Reversed layout on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Illustrative Product UI: Targeted Search & Candidate Cards (First on Desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Card
                variant="white"
                radius="large"
                className="p-6 sm:p-8 space-y-5 border-[#e8e8e8]"
              >
                {/* Search Filter Cue */}
                <div className="p-4 rounded-2xl bg-[#fafafa] border border-[#f0f0f0] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#787878]">
                      Active Gap Filter
                    </span>
                    <span className="text-xs font-medium text-[#007aff]">
                      Criteria Auto-Generated
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-[#007aff]/10 text-[#007aff]">
                      Role: Backend Lead
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-white border border-[#e0e0e0] text-[#484848]">
                      PostgreSQL
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-white border border-[#e0e0e0] text-[#484848]">
                      FastAPI / Go
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-white border border-[#e0e0e0] text-[#484848]">
                      Docker
                    </span>
                  </div>
                </div>

                {/* Targeted Candidate Discovery Cards */}
                <div className="space-y-3">
                  {/* Candidate 1 */}
                  <div className="p-4 rounded-2xl bg-white border border-[#e8e8e8] shadow-subtle space-y-3 hover:border-[#c0c0c0] transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#f0f0f0] border border-[#e0e0e0] flex items-center justify-center text-xs font-bold text-[#484848]">
                          CP
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-[#484848]">Candidate Profile</span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#fafafa] border border-[#e0e0e0] text-[#5f6368] font-medium">
                              Verified Student
                            </span>
                          </div>
                          <p className="text-xs text-[#5f6368]">Systems &bull; Cloud Infrastructure</p>
                        </div>
                      </div>
                      <Badge variant="accent" className="text-xs font-semibold">
                        Fills Missing Gap
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#fafafa] border border-[#f0f0f0] text-[#484848]">
                        FastAPI
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#fafafa] border border-[#f0f0f0] text-[#484848]">
                        PostgreSQL
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#fafafa] border border-[#f0f0f0] text-[#484848]">
                        Docker
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#fafafa] border border-[#f0f0f0] text-[#484848]">
                        AWS Telemetry
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#f0f0f0] text-xs text-[#787878]">
                      <span>Availability: 15 hrs/week</span>
                      <span className="text-[#007aff] font-medium">Compatible Experience</span>
                    </div>
                  </div>

                  {/* Secondary candidate preview */}
                  <div className="p-3.5 rounded-2xl bg-[#fafafa] border border-[#f0f0f0] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-[#e8e8e8] flex items-center justify-center text-[11px] font-semibold text-[#5f6368]">
                        DB
                      </div>
                      <div>
                        <p className="font-semibold text-[#484848]">Database &amp; Pipeline Specialist</p>
                        <p className="text-[11px] text-[#787878]">Redis &bull; Apache Kafka &bull; Go</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-[#5f6368]">Available</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Story Text (Second on Desktop) */}
            <div className="lg:col-span-5 space-y-4 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#007aff]">
                  02
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-[#787878]">
                  Find The Missing Piece
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848] leading-snug">
                See the gap before you start searching.
              </h3>

              <p className="text-base text-[#5f6368] leading-relaxed">
                Rather than browsing thousands of unrelated resumes or broadcasting in
                unfocused group chats, search directly against what your team lacks.
                TeamUp helps you filter prospective teammates by the concrete skills,
                commitments, and roles your project actually needs.
              </p>

              <div className="pt-2">
                <ul className="space-y-2 text-sm text-[#5f6368]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#007aff] shrink-0" aria-hidden="true" />
                    <span>Targeted queries automatically derived from missing team specs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#007aff] shrink-0" aria-hidden="true" />
                    <span>Verified candidate skills and past competition profiles</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#007aff] shrink-0" aria-hidden="true" />
                    <span>Transparent availability to prevent team member drop-offs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Story 3: Match With Purpose */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Text */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#007aff]">
                  03
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-[#787878]">
                  Match With Purpose
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848] leading-snug">
                Don&apos;t just find people. Find people who fit the team.
              </h3>

              <p className="text-base text-[#5f6368] leading-relaxed">
                A strong team requires more than overlapping keywords. TeamUp evaluates
                multidimensional compatibility—pairing complementary skill proficiencies,
                distinct project responsibilities, and aligned weekly commitments so
                your group can focus on executing.
              </p>

              <div className="pt-2">
                <ul className="space-y-2 text-sm text-[#5f6368]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#007aff] shrink-0" aria-hidden="true" />
                    <span>Complementary skill coverage rather than duplicate roles</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#007aff] shrink-0" aria-hidden="true" />
                    <span>Proven experience levels suited for competition scale</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#007aff] shrink-0" aria-hidden="true" />
                    <span>Synchronized weekly availability and work ethic</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Illustrative Product UI: Match Compatibility Evaluation */}
            <div className="lg:col-span-7">
              <Card
                variant="white"
                radius="large"
                className="p-6 sm:p-8 space-y-5 border-[#e8e8e8]"
              >
                {/* Match Evaluation Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#f0f0f0]">
                  <div>
                    <span className="text-xs font-medium text-[#787878]">
                      Fit Evaluation (Illustrative)
                    </span>
                    <h4 className="text-base font-bold text-[#484848]">
                      Candidate Compatibility Analysis
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#007aff]/10 text-[#007aff]">
                    High Alignment
                  </span>
                </div>

                {/* Compatibility Dimension Indicators */}
                <div className="space-y-4">
                  {/* Metric 1: Skill Coverage */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#484848]">
                      <span>Skill &amp; Role Coverage</span>
                      <span className="text-[#007aff]">Full Coverage</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-2 overflow-hidden">
                      <div className="bg-[#007aff] h-2 rounded-full w-[95%]" />
                    </div>
                    <p className="text-[11px] text-[#787878]">
                      Satisfies missing cloud database &amp; real-time telemetry requirements
                    </p>
                  </div>

                  {/* Metric 2: Experience Fit */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#484848]">
                      <span>Relevant Project Experience</span>
                      <span className="text-[#007aff]">Verified Track Record</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-2 overflow-hidden">
                      <div className="bg-[#007aff] h-2 rounded-full w-[88%]" />
                    </div>
                    <p className="text-[11px] text-[#787878]">
                      Previous competition submission in robotics telemetry
                    </p>
                  </div>

                  {/* Metric 3: Time & Availability */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#484848]">
                      <span>Weekly Schedule Alignment</span>
                      <span className="text-[#007aff]">15+ hrs/week Match</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-2 overflow-hidden">
                      <div className="bg-[#007aff] h-2 rounded-full w-[90%]" />
                    </div>
                    <p className="text-[11px] text-[#787878]">
                      Evenly distributed evening and weekend availability
                    </p>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-3 border-t border-[#f0f0f0] flex items-center justify-between">
                  <span className="text-xs text-[#787878]">
                    Ready to collaborate
                  </span>
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-[#484848] text-white">
                    Send Team Invitation
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

