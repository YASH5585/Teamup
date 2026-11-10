import enum


class UserRole(str, enum.Enum):
    """
    Core role enumeration for TeamUp users across the platform.
    Designed to support multi-role domain expansion in subsequent phases:
    - STUDENT: University students participating in competitions and squads
    - COLLEGE_ADMIN: Institutional representatives managing college-sponsored hackathons
    - PLATFORM_ADMIN: TeamUp operators reviewing submissions and maintaining platform health
    """
    STUDENT = "student"
    COLLEGE_ADMIN = "college_admin"
    PLATFORM_ADMIN = "platform_admin"


class MembershipRole(str, enum.Enum):
    """
    Institutional affiliation role within a College entity.
    """
    MEMBER = "member"
    REPRESENTATIVE = "representative"
    ADMIN = "admin"

