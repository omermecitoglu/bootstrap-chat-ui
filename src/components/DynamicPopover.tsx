import React, { useEffect } from "react";
import Popover, { type PopoverProps } from "react-bootstrap/Popover";

type DynamicPopoverProps = {
  updateCriteria: unknown,
};

const DynamicPopover = React.forwardRef<HTMLDivElement, DynamicPopoverProps & PopoverProps>(
  ({ popper, children, show: _, updateCriteria, ...props }, ref) => {
    useEffect(() => {
      if (!popper || !popper.scheduleUpdate) return;
      popper.scheduleUpdate();
    }, [updateCriteria, popper]);

    return (
      <Popover ref={ref} {...props}>
        <Popover.Body>
          {children}
        </Popover.Body>
      </Popover>
    );
  },
);

export default DynamicPopover;
