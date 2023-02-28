export default function HeaderUserInfo() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[125px] h-[125px] rounded-full bg-black-300 my-4"></div>
      <p className="text-2xl">Frankie Lam</p>
      <p className="text-black-200 dark:text-white-200 mt-2 text-sm">
        Domestic customer
      </p>
      <p className="text-black-200 dark:text-white-200 text-sm">#081237123</p>
    </div>
  );
}
