import { ModalProps } from "@modal";
import { AuthModal } from "@modal/modal-auth";
import { BookingModal } from "@modal/modal-booking";
import { CheckModal } from "@modal/modal-check";
import { GlobeModal } from "@modal/modal-globe";
import { GuestsModal } from "@modal/modal-guests";
import { ListingModal } from "@modal/modal-listing";
import { LocationModal } from "@modal/modal-location";
import { MenuModal } from "@modal/modal-menu";
import { PrivacyModal } from "@modal/modal-privacy";

export const factory = (props: ModalProps) => {
  switch (props.variant) {
    case "privacy":
      return <PrivacyModal {...props} />;
    case "menu":
      return <MenuModal {...props} />;
    case "auth":
      return <AuthModal />;
    case "booking":
      return <BookingModal {...props} />;
    case "globe":
      return <GlobeModal />;
    case "location":
      return <LocationModal />;
    case "guests":
      return <GuestsModal {...props} />;
    case "checkin":
      return <CheckModal />;
    case "checkout":
      return <CheckModal />;
    case "listing":
      return <ListingModal />;
    default:
      throw new Error("[Modal Error] Invalid varint provided");
  }
};
