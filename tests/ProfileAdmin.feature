## Write your tests here.

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I search for "Designer, Maison" in filters sidebar
THEN I expect to see he following profiles in the profiles table:
    | Rabih Kayrouz   |

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I search for "Designer, Mason" in filters sidebar
THEN I expect to see he following profiles in the profiles table:
    |                 |

WHEN I visit the homepage
THEN I expect to see filters sidebar
WHEN I search for "Chairman" in filters sidebar
AND I filter by "Enabled" "No" in the sidebar
AND I filter by "Enabled" "Yes" in the sidebar
AND I filter by "Visible" "No" in the sidebar
THEN I expect to see he following profiles in the profiles table:
    | Johann Rupert    |

WHEN I visit the homepage
THEN I expect to see filters sidebar
AND I expect to see a table of profiles
AND I expect to see "10" profiles in a table
WHEN I press the next page button
THEN I expect e "10" new profiles in a table

WHEN I visit profile edit page
THEN I expect profile data to be pre-filled
WHEN I change the profile data
AND I press "Save"
THEN I expect to by navigated back to be homepage

WHEN I visit profile edit page
THEN I expect profile data to be pre-filled
WHEN I change the thumbnail image
AND I press "Cancel"
THEN I expect the thumbnail to be not saved