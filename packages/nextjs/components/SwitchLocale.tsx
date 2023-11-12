import { useRouter } from "next/router";
import { useIsMounted } from "usehooks-ts";

export const SwitchLocale = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const isMounted = useIsMounted();

  const toggle = () => {
    const locale = router.locale === "en" ? "tr" : "en";
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <div className={`flex space-x-2 text-sm ${className}`}>
      <input
        id="theme-toggle"
        type="checkbox"
        className="toggle toggle-primary bg-primary"
        onChange={toggle}
        checked={router.locale === "tr"}
      />
      {isMounted() && (
        <label htmlFor="theme-toggle" className={`swap swap-rotate ${!(router.locale === "tr") ? "swap-active" : ""}`}>
          <p className="swap-on h-5 w-5">EN</p>
          <p className="swap-off h-5 w-5">TR</p>
        </label>
      )}
    </div>
  );
};
