import { forwardRef, useMemo, useState } from "react";
import { Input } from "./ui/input";
import citiesList from "@/lib/cities-list";

interface LocationInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (location: string) => void;
}
export default forwardRef<HTMLInputElement, LocationInputProps>(
  function LocationInput({ onLocationSelected, ...props }, ref) {
    const [locationSearchInput, setLocationSearchInput] = useState("");
     const [isFocus, setIsFocus] = useState<boolean>(false)

    const cities = useMemo(() => {
      if (!locationSearchInput.trim()) return [];

      const searchWords = locationSearchInput.split(" ");

      return citiesList
        .map((city) => `${city.name}, ${city.subcountry}, ${city.country}`)
        .filter(
          (city) =>
            city.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
            searchWords.every((word) =>
              city.toLowerCase().includes(word.toLowerCase()),
            ),
        )
        .slice(0, 5);
    }, [locationSearchInput]);

    return (
      <div className="relative">
        <Input
        placeholder="Search for a city"
        type="search"
          value={locationSearchInput}
          onChange={(e) => setLocationSearchInput(e.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          {...props}
          ref={ref}
        />
        
        {locationSearchInput.trim() && isFocus && (
          <div className="absolute z-20 divide-y rounded-b-lg border-x border-b bg-background shadow-xl">
            {!cities.length && <p>No cities found</p>}
            {cities.map((city) => (
              <button 
              onMouseDown={(e) => {
                e.preventDefault();
                onLocationSelected(city)
                setLocationSearchInput("")
              }}
              className="block w-full text-start p-2" key={city}>{city}</button>
            ))}
          </div>
        )}
      </div>
    );
  },
);
