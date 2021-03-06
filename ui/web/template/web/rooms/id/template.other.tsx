/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

/**
 * Renders the other section
 * @param {string} location - Location of the page
 * @param {Object[]} locations - List of other locations
 */
export const OtherTemplate: React.FC<{
  location?: any;
  locations?: any;
}> = ({
  location = "Location",
  locations = [
    { name: "Anchorage", url: "/" },
    { name: "Talkeetna", url: "/" },
    { name: "Wasilla", url: "/" },
    { name: "Palmer", url: "/" },
    { name: "Big Lake", url: "/" },
    { name: "Willow", url: "/" },
    { name: "Nancy Lake", url: "/" },
    { name: "Houston", url: "/" },
    { name: "Hatcher Pass", url: "/" },
    { name: "Cantwell", url: "/" },
    { name: "Glacier View", url: "/" },
    { name: "Eureka Roadhouse", url: "/" },
  ],
}) => {
  return (
    <div>
      <div>
        <h3
          css={{
            fontWeight: 500,
            marginBottom: 20,
            color: "grey.800",
            fontSize: 22,
          }}
        >
          Explore other options in and around {location}
        </h3>
      </div>
      <div
        css={{
          marginBottom: 8,
        }}
      >
        <div>
          <p
            css={{
              fontWeight: 100,
            }}
          >
            More place to stay in Penafiel:
          </p>
        </div>
        <div>
          <span
            css={{
              fontWeight: 100,
              color: "grey.600",
            }}
          >
            Apartments
          </span>
          <span
            css={{
              fontWeight: 100,
              color: "grey.600",
            }}
          >
            {" "}
            ·{" "}
          </span>
          <span
            css={{
              fontWeight: 100,
              color: "grey.600",
            }}
          >
            Houses
          </span>
          <span
            css={{
              fontWeight: 100,
              color: "grey.600",
            }}
          >
            {" "}
            ·{" "}
          </span>
          <span
            css={{
              fontWeight: 100,
              color: "grey.600",
            }}
          >
            Bed and breakfasts
          </span>
          <span
            css={{
              fontWeight: 100,
              color: "grey.600",
            }}
          >
            {" "}
            ·{" "}
          </span>
          <span
            css={{
              fontWeight: 100,
              color: "grey.600",
            }}
          >
            Lofts
          </span>
          <span
            css={{
              fontWeight: 100,
              color: "grey.600",
            }}
          >
            {" "}
            ·{" "}
          </span>
          <span
            css={{
              fontWeight: 100,
              color: "grey.600",
            }}
          >
            Villas
          </span>
        </div>
      </div>

      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ul
          css={{
            padding: 0,
            listStyle: "none",
            width: "100%",
            marginTop: 32,
          }}
          // className={[section["display__other"]].join(" ")}
        >
          {locations.map((location, index) => {
            return (
              <li
                key={index}
                css={{
                  fontWeight: 100,
                  color: "grey.600",
                }}
              >
                <div
                  css={{
                    marginBottom: 18,
                  }}
                >
                  <p
                    css={{
                      fontSize: 15,
                    }}
                  >
                    {location.name}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
